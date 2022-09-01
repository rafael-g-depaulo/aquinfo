import { PrismaClient, User } from "@db"
import { Router } from "express"
import { loggedIn } from "../middlewares/loggedIn"

import { createUser } from "../repositories/user"
import { compareHash } from "../utils/hash"
import { signToken } from "../utils/token"

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
        .findUnique({ where: { email } })
        .then((user: User | null) => {
          if (!user)
            return res
              .status(404)
              .json({ error: `no user with email ${email} found` })

          if (!compareHash(user.password, password, user.salt))
            return res.status(400).json({ error: "password didn't match" })

          return res.json({
            token: signToken({ id: user.id, email: user.email }),
          })
        })
        .catch((error) => {
          console.log("err", error)
          res.status(500).json({ error })
        })
    })
    .post("/login-check", loggedIn, (req, res) => {
      res.json({ payload: req.jwt_payload })
    })
}
