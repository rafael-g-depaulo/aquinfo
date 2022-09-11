/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@db"
import { ShowerEntity } from "@water-calc"
import { Router } from "express"
import { loggedIn } from "../middlewares/loggedIn"
import { getFile, sendFileToS3 } from "../utils/file"
interface ShowerDeps {
  db: PrismaClient
}

export const ShowerModule = ({ db }: ShowerDeps) => {
  return Router()
    .get("/", (req, res) => {
      db.showerModel.findMany().then((books) => {
        res.json([...books])
      })
    })
    .get("/:id", (req, res) => {
      db.showerModel
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
      const { name, waterPerMinute } = req.body as ShowerEntity
      const file = getFile(req, "image")
      sendFileToS3(file)
        .then((result) => result.url)
        .then((imageUrl) =>
          db.showerModel.create({
            data: {
              name,
              imageUrl,
              waterPerMinute,
            },
          }),
        )
        .then((shower) => res.json({ shower }))
    })
}
