const express = require("express");

const routers = require("./router");

const app = express();

app.use(express.json());
app.use("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

app.use("/songs", routers.songs);
app.use("/chords", routers.chords);
app.use("/books", routers.books);

module.exports = app;

app.listen(3002, () => console.log(`Up and Running on port 3002`));
