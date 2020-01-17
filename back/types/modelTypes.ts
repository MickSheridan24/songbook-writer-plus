import { MigrationLog } from "./dbtypes";
import Book from "../Models/Book";
import User from "../Models/User"
import Chord from "../Models/Chord";
import Song from "../Models/Songs";



type tIndex = { [_: string]: string | number | boolean }

interface iResource {
    _fields: tIndex
    getFields(): tIndex
}


type Resource = User | Song | Book | Chord | MigrationLog;

export {
    Book,
    Chord,
    Song,
    User,
    Resource,
    tIndex,
    iResource

}