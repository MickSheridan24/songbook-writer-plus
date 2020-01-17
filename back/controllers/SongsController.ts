import express from "express";
import Song from "../Models/Songs";
import Songs from "../Models/contexts/SongContext"
const router = express.Router();

router.get("/:id", async (req, res) => {
    const song = await Songs.get(req.params.id)
    res.send(song)
});

// router.get("/", async (req, res) => {
//     const songs = await Songs.all(req.params.id)
// })
router.use("/", (req, res, next) => {
    next();
});
export default router;
