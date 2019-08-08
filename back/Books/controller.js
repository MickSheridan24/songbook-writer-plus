const router = require("express").Router();
const Book = require("./model");

router.get("/", async (req, res) => {
  const books = await Book.all();
  res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.get(req.params.id);
  res.send(book);
});

router.post("/", async (req, res) => {
  Book.create(req.body).then(r => res.send(r));
});

router.delete("/:id", async (req, res) => {
  const book = await Book.delete(req.params.id);
});

module.exports = router;
