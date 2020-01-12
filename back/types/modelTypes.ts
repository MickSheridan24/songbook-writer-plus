import { MigrationLog } from "./dbtypes";
import Book from "../src/Books/model";
import User from "../src/Users/model"
import Chord from "../src/Chords/model";
import Song from "../src/Songs/model";
import BaseModel from "../src/Model/BaseModel"



type Resource = User | Song | Book | Chord | MigrationLog;





export {
    Book,
    Chord,
    Song,
    User,
    Resource,

}