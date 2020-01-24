import express from "express";
import Controller from "../SongsController"
const router = express.Router();

router.get("/index/:bookID", async (req, res) => {
    res.send(await Controller.All(parseInt(req.params.bookID)));
});

router.get("/:id", async (req, res, next) => {
    const resp = JSON.stringify(await Controller.Get(req.params.id))
    console.log("ROUTER", resp)
    res.send(resp);
});

router.post("/", async (req, res) => {
    res.send(await Controller.Create(req.body))
});

router.patch("/:id", async (req, res) => {
    console.log("RECEIVED: ", req.params.id, "\n\nBODY:", typeof req.body, req.body)
    res.send(await Controller.Update(parseInt(req.params.id), req.body))
})

export default router;