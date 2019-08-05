// is This neccessary

const router = require("express").Router();
const song = require("./model");

router.get("/song/:songId", async (req, res) => {
  //return all chords by that song
  //will be serializer method
});

router.update("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  //songId in body
});

module.exports = router;
