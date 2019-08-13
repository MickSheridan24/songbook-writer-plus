const router = require("express").Router();
const song = require("./model");

router.get("/:id", (req, res) => {
  song.get(req.params.id, { getChords: true }).then(r => res.send(r));
});
router.use("/", (req, res, next) => {
  next();
});

module.exports = router;
