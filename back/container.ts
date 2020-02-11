import SongsController from "./controllers/SongsController";
import SongContext from "./Models/contexts/SongContext";
import BookContext from "./Models/contexts/BookContext";
import BooksController from "./controllers/BooksController";
import UserContext from "./Models/contexts/UserContext";
import UsersController from "./controllers/UsersController";


const songs = new SongsController(new SongContext());
const books = new BooksController(new BookContext());
const users = new UsersController(new UserContext());

const container = {
    songs: songs,
    books: books,
    users: users

}

export default container;