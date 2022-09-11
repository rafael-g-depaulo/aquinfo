/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@db"
import { FlushSystemType } from "@water-calc"
import { Router } from "express"
import { loggedIn } from "../middlewares/loggedIn"
import { getFile, sendFileToS3 } from "../utils/file"
interface FlushSystemsDeps {
  db: PrismaClient
}

export const FlushSystemsModule = ({ db }: FlushSystemsDeps) => {
  return Router()
    .get("/", (req, res) => {
      db.flushSystem.findMany().then((books) => {
        res.json([...books])
      })
    })
    .get("/:id", (req, res) => {
      db.flushSystem
        .findFirst({
          where: {
            id: parseInt(req.params.id),
          },
        })
        .then((books) => {
          res.json(books)
        })
    })
    .post("/create", loggedIn, (req, res) => {
      const { flushTypes } = req.body
      const file = getFile(req, "image")
      sendFileToS3(file)
        .then((result) => result.url)
        .then((imageUrl) =>
          db.flushSystem.create({
            data: {
              flushTypes: (flushTypes as any[]).map<FlushSystemType>((f) => ({
                seconds: parseFloat(f.seconds),
                totalWaterCost: parseFloat(f.totalWaterCost),
              })),
              imageUrl,
            },
          }),
        )
        .then((createdFlush) => res.json({ flush: createdFlush }))
    })
}
