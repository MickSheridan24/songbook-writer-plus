import express from "express";
import Songs from "./model";
const router = express.Router();
router.get("/:id", (req, res) => {
    Songs.get(parseInt(req.params.id), { getChords: true }).then(r => res.send(r));
});
router.use("/", (req, res, next) => {
    next();
});
module.exports = router;
