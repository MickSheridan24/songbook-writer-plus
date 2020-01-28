import express from "express";
import Controller from "../BooksController"
const router = express.Router();

router.get("/", async (req, res) => {
    res.send(JSON.stringify(await Controller.All()));
});
router.get("/search", async (req, res) => {
    res.send(await Controller.Where(req.query))
})

router.get("/:id", async (req, res, next) => {

    console.log("params", req.params.id)
    res.send(JSON.stringify(await Controller.Get(req.params.id)));
});

router.post("/", async (req, res) => {
    res.send(await Controller.Create(req.body))
});

export default router;