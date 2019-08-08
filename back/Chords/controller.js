// is This neccessary

const router = require("express").Router();
const Chord = require("./model");

router.get("/song/:songId", async (req, res) => {
  //return all chords by that song
  //will be serializer method
});

router.patch("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  //songId in body
  Chord.create(req.body).then(success => res.send(success));
});

module.exports = router;
