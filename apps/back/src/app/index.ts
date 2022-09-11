import { PrismaClient } from "@db"
import { Router } from "express"
import { BooksModule } from "./books-example"
import { FlushSystemsModule } from "./flush-module"
import { ShowerModule } from "./shower-module"
import { UsersModule } from "./usersModule"

interface modulesDeps {
  db: PrismaClient
}

export const connectModules = (app: Router, { db }: modulesDeps) => {
  return app
    .use("/books", BooksModule({ db }))
    .use("/users", UsersModule({ db }))
    .use("/flushes", FlushSystemsModule({ db }))
    .use("/showers", ShowerModule({ db }))
}
