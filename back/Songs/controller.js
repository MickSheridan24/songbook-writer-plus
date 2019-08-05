const router = require("express").Router();
const song = require("./model");

router.get("/", (req, res) => {
  song.all().then(r => res.send(r));
});

router.get("/:id", (req, res) => {
  song.get(req.params.id).then(r => res.send(r));
});

router.post("/", (req, res) => {
  song.create(req.body).then(success => res.send(success));
});

router.patch("/:id", (req, res) => {
  console.log("patchin");
  song.update(req.params.id, req.body).then(success => res.send(success));
});

router.delete("/:id", (req, res) => {
  song.delete(req.params.id).then(success => res.send(success));
});

module.exports = router;
