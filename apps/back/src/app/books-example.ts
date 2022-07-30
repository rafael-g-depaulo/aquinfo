import { PrismaClient } from "@db";
import { Router } from "express";
interface BooksDeps {
  db: PrismaClient;
}

export const BooksModule = ({ db }: BooksDeps) => {

  return Router()
    .get("/", (req, res) => {
      db.book.findMany()
        .then(books => {
          res.json(books);
        });
    })
    .get("/:id", (req, res) => {
      db.book.findFirst({
        where: {
          id: req.params.id
        }
      })
        .then(books => {
          res.json(books);
        });
    });
};
