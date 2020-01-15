import express from "express";
import Books from "../Models/Book";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Books.all();
  res.send(books);
});
router.get("/search", async (req, res) => {

  debugger;
  const books = await Books.where(req.query);
  res.send(books)
})
router.get("/:id", async (req, res) => {
  const book = await Books.get(req.params.id);
  res.send(book);
});

router.post("/", async (req, res) => {
  console.log("CONTROLLER")
  debugger
  const book = await Books.create(req.body)
  res.send(book)
});

// router.delete("/:id", async (req, res) => {
//   const book = await Books.delete(req.params.id);
// });

export default router;
