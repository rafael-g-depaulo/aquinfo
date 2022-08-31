import { PrismaClient } from "@db"
import { Router } from "express"
import { createUser } from "../repositories/user"

interface UsersDeps {
  db: PrismaClient
}

export const UsersModule = ({ db }: UsersDeps) => {
  return Router()
    .get("/", (req, res) => {
      db.user.findMany().then((Users) => {
        res.json([
          ...Users,
          {
            id: "noneofyourbusiness",
            title: "hardcoded example",
            publishDate: new Date(),
          },
        ])
      })
    })
    .post("/create", (req, res) => {
      const { email, password } = req.body ?? {}

      createUser({ email, password }, db)
        .then((user) => res.json({ user }))
        .catch((error) => res.status(500).json({ error }))
    })
}
