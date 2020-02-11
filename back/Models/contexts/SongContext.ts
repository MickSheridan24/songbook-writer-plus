import DBContext from "./DBContext"
import { tIndex, Song } from "../../types/modelTypes"

class SongContext extends DBContext {
    static _t: string

    constructor() {
        super();
        this._t = "songs"

    }

    returnModel(fields: tIndex): Song {
        return new Song(fields);
    }
}

export default SongContext