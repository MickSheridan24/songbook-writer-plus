

import songs from "./controllers/SongsController"
import chords from "./controllers/ChordsController"
import books from "./controllers/Routers/BookRouter"

console.log("ROUTER")
const router = {
    songs, books, chords
}


export default router