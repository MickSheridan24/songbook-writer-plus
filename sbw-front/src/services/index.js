import * as books from "./BookService"
import * as songs from "./SongService"

const ex = { ...books, ...songs }

export default ex