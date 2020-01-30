import SongDB from "../Models/contexts/SongContext"
import { tIndex, Song } from "../types/modelTypes";
import { validateSongParams } from "../Models/validators/SongValidator";


class SongsController {

    static async All(bookId: number) {
        const songs = await SongDB.where({ bookId: bookId });
        return songs.map((s: Song) => s.getFields())
    }

    static async Get(id: string) {
        const song = await SongDB.get(id)
        return song ? song.getFields() : null;
    }

    static async Create(params: tIndex) {
        let song = new Song(validateSongParams(params))
        return await SongDB.create(song)
    }

    static async Update(id: number, params: tIndex) {
        let validParams = validateSongParams(params)
        const song = await SongDB.update(id, validParams);
        return song.getFields()
    }
}

export default SongsController