import SongsController from "./controllers/SongsController";
import SongContext from "./Models/contexts/SongContext";
import BookContext from "./Models/contexts/BookContext";
import BooksController from "./controllers/BooksController";
import UserContext from "./Models/contexts/UserContext";
import UsersController from "./controllers/UsersController";


const songCxt = new SongContext();
const bookCxt = new BookContext();
const userCxt = new UserContext();

const container = {

    songs: () => new SongsController(songCxt),
    books: () => new BooksController(bookCxt),
    users: () => new UsersController(userCxt)

}

export default container;