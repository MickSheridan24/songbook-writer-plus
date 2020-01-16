import { MigrationLog } from "./dbtypes";
import Book from "../Models/Book";
import User from "../Models/User"
import Chord from "../Models/Chord";
import Song from "../Models/Songs";
import BaseModel from "../Models/BaseModel"

type indexable = { [_: string]: number | string | boolean }

type Resource = User | Song | Book | Chord | MigrationLog;

export {
    Book,
    Chord,
    Song,
    User,
    Resource,

}