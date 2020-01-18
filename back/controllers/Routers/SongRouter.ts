import express from "express";
import Controller from "../SongsController"
const router = express.Router();

router.get("/index/:bookID", async (req, res) => {
    res.send(await Controller.All(parseInt(req.params.bookID)));
});

router.get("/:id", async (req, res, next) => {
    res.send(await Controller.Get(req.params.id));
});

router.post("/", async (req, res) => {
    res.send(await Controller.Create(req.body))
});

export default router;