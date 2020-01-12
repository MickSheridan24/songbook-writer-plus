import express from "express";
import Books from "./model";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Books.all();
  res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await Books.get(req.params.id);
  res.send(book);
});

router.post("/", async (req, res) => {
  Books.create(req.body).then(r => res.send(r));
});

router.delete("/:id", async (req, res) => {
  const book = await Books.delete(req.params.id);
});

module.exports = router;
