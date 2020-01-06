const express = require("express");
const routers = require("./router");
const restController = require("./RestController");

const app = express();

app.use(express.json());
app.use("/", function(req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

app.use("/songs", routers.songs, restController("songs"));
app.use("/chords", restController("chords"));
app.use("/books", restController("books"));

module.exports = app;

app.listen(3002, () => console.log(`Up and Running on port 3002`));
