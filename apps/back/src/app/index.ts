import { PrismaClient } from "@db";
import { Router } from "express";
import { BooksModule } from "./books-example";

interface modulesDeps {
  db: PrismaClient;
}

export const connectModules = (app: Router, { db }: modulesDeps) => {
  return app.use("/book", BooksModule({ db }));
};
