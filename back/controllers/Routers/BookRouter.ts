import express from "express";
const router = express.Router();
import container from "../../container"
const Controller = container.books();
router.get("/", async (req, res) => {
    res.send(JSON.stringify(await Controller.All()));
});
router.get("/search", async (req, res) => {
    res.send(await Controller.Where(req.query))
})

router.get("/:id", async (req, res) => {
    console.log("params", req.params.id)
    res.send(JSON.stringify(await Controller.Get(req.params.id)));
});

router.post("/", async (req, res) => {
    res.send(JSON.stringify(await Controller.Create(req.body)))
});

export default router;