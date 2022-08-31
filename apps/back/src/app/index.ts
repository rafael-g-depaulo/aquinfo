import { PrismaClient } from "@db"
import { Router } from "express"
import { BooksModule } from "./books-example"
import { UsersModule } from "./usersModule"

interface modulesDeps {
  db: PrismaClient
}

export const connectModules = (app: Router, { db }: modulesDeps) => {
  return app
    .use("/books", BooksModule({ db }))
    .use("/users", UsersModule({ db }))
}
