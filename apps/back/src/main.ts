/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from "express"
import * as cors from "cors"
import { PrismaClient } from "@db"
import { connectModules } from "./app"

const app = express()

// setup global middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = new PrismaClient()

db.$connect().then(() => {
  connectModules(app, { db })
})

const port = process.env.PORT || 3333

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
})
server.on("error", console.error)
