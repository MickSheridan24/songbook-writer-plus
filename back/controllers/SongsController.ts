import SongDB from "../Models/contexts/SongContext"
import { tIndex, Song } from "../types/modelTypes";


class SongsController {

    static async All(bookId: number) {
        const songs = await SongDB.where({ bookId: bookId });
        return songs
    }

    static async Get(id: string) {
        const song = await SongDB.get(id)
        return Song
    }

    static async Create(params: tIndex) {
        let song = new Song(params)
        return await SongDB.create(song)
    }
}

export default SongsController