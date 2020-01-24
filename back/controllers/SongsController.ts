import SongDB from "../Models/contexts/SongContext"
import { tIndex, Song } from "../types/modelTypes";
import { validateSongParams } from "../Models/validators/SongValidator";


class SongsController {

    static async All(bookId: number) {
        const songs = await SongDB.where({ bookId: bookId });
        return songs
    }

    static async Get(id: string) {
        const song = await SongDB.get(id)
        console.log("CONTROLLER", song)
        return song
    }

    static async Create(params: tIndex) {
        let song = new Song(params)
        return await SongDB.create(song)
    }

    static async Update(id: number, params: tIndex) {
        let song = validateSongParams(params)
        return await SongDB.update(id, song);
    }
}

export default SongsController