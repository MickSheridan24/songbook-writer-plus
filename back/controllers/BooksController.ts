import express from "express";
import BookDB from "../Models/contexts/BookContext"
import Book from "../Models/Book";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await BookDB.all();
  res.send(books);
});
router.get("/search", async (req, res) => {

  debugger;
  const books = await BookDB.where(req.query);
  res.send(books)
})
router.get("/:id", async (req, res) => {
  const book = await BookDB.get(req.params.id);
  res.send(book);
});

router.post("/", async (req, res) => {
  console.log("CONTROLLER")
  debugger
  let book = new Book(req.body)
  await BookDB.create(book)
  res.send(book)
});

// router.delete("/:id", async (req, res) => {
//   const book = await Books.delete(req.params.id);
// });

export default router;
