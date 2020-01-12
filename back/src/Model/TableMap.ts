import User from "../Users/model"
import Song from "../Songs/model"
import proto from "./Prototypes"
import Chords from "../Chords/model"
import Book from "../Books/model"

type ValidTable =
    "users" |
    "songs" |
    "books" |
    "chords" |
    "invalid"


interface Table<T> {
    name: ValidTable,
    model: T
}

const TableMap = [
    <Table<User>>{
        name: "users",
        model: proto.User
    },
    <Table<Song>>{
        name: "songs",
        model: proto.Song
    },
    <Table<Chord>>{
        name: "chords",
        model: proto.Chord
    },
    <Table<Book>>{
        name: "books",
        model: proto.Book
    },
]

export default TableMap