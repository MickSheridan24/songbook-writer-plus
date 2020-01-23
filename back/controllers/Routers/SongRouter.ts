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

router.patch("/:id", async (req, res) => {
    console.log("RECEIVED: ", req.params.id, "\n\nBODY:", typeof req.body, req.body)
    res.send(await Controller.Update(parseInt(req.params.id), req.body))
})

export default router;