import songs from "./controllers/Routers/SongRouter";
import chords from "./controllers/ChordsController";
import books from "./controllers/Routers/BookRouter";
import users from "./controllers/Routers/UserRouter";
import login from "./controllers/LoginController";

console.log("ROUTER");
const router = {
  songs,
  books,
  chords,
  users,
  login
};

export default router;
