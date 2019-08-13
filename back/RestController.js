const rest = resource => {
  const Model = require("./RestModel");
  const router = require("express").Router();

  router.get("/", async (req, res) => {
    const ret = await Model.all(resource);
    res.send(ret);
  });

  router.get("/:id", async (req, res) => {
    const ret = await Model.get(resource, req.params.id);
    res.send(ret);
  });

  router.post("/", async (req, res) => {
    console.log(req.body);
    Model.create(resource, req.body).then(r => res.send(r));
  });

  router.delete("/:id", async (req, res) => {
    const del = await Model.delete(resource, req.params.id);
    res.send(del);
  });
  return router;
};

module.exports = rest;
