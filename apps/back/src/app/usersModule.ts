import { PrismaClient, User } from "@db"
import { Router } from "express"
import { compareHash, createUser } from "../repositories/user"

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
    .post("/login", (req, res) => {
      const { email, password } = req.body ?? {}

      if (!email || !password)
        return res
          .status(500)
          .json({ error: "password and email are required" })

      db.user
        .findFirst({ where: { email } })
        .then((user: User | null) => {
          if (!user)
            return res
              .status(404)
              .json({ error: `no user with email ${email} found` })

          if (!compareHash(user.password, password, user.salt))
            return res.status(400).json({ error: "password didn't match" })

          return res.json({ user })
        })
        .catch((error) => res.status(500).json({ error }))
    })
}
