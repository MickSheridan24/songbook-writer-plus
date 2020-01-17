import express from "express";
import Controller from "../BooksController"
const router = express.Router();

router.get("/", async (req, res) => {
    res.send(await Controller.All());
});
router.get("/search", async (req, res) => {
    res.send(await Controller.Where(req.query))
})

router.get("/:id", async (req, res, next) => {
    res.send(await Controller.Get(req.params.id));
});

router.post("/", async (req, res) => {
    res.send(await Controller.Create(req.body))
});

export default router;