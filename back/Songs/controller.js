const router = require("express").Router();
const song = require("./model");

router.get("/", (req, res) => {
  song.all().then(r => res.send(r));
});

router.get("/:id", (req, res) => {
  song.get(req.params.id).then(r => res.send(r));
});

router.post("/", (req, res) => {
  res.send(req.body)
});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
