import DBContext from "./DBContext"
import { tIndex, Song } from "../../types/modelTypes"

class SongContext extends DBContext {
    static _t: string = "songs"

    static returnModel(fields: tIndex): Song {
        return new Song(fields);
    }
}

export default SongContext