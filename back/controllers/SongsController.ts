import express from "express";
import Songs from "../Models/Songs";
const router = express.Router();

// router.get("/:id", (req, res) => {
//   Songs.get(parseInt(req.params.id)).then(r =>
//     res.send(r)
//   );
// });
// router.use("/", (req, res, next) => {
//   next();
// });
export default router;
