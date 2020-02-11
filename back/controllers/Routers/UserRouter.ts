import express from "express";
import Controller from "../UsersController"
const router = express.Router();


router.get("/:id", async (req, res) => {
    const resp = JSON.stringify(await Controller.Get(req.params.id))
    res.send(resp);
});

router.post("/", async (req, res) => {
    const resp = JSON.stringify(await Controller.Create(req.body))

    res.send(resp)
});

router.patch("/:id", async (req, res) => {
    console.log("RECEIVED: ", req.params.id, "\n\nBODY:", typeof req.body, req.body)
    res.send(await Controller.Update(parseInt(req.params.id), req.body))
})

export default router;