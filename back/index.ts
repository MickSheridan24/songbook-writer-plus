import express from "express";
import routers from "./router";
import container from "./container"
const app = express();
app.use(express.json());
app.use("/", function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});
console.log("INDEX");
app.use("/login", routers.login);
app.use("/songs", routers.songs);
app.use("/chords", routers.chords);
app.use("/books", routers.books);
app.use("/users", routers.users);

module.exports = app;

app.listen(4001, () => console.log(`Up and Running on port 4001`));
