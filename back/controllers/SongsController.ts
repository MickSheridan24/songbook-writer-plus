import SongDB from "../Models/contexts/SongContext";
import { tIndex, Song } from "../types/modelTypes";
import { validateSongParams } from "../Models/validators/SongValidator";

class SongsController {
  db: SongDB;
  constructor(db: SongDB) {
    this.db = db;
  }
  async All(bookId: number) {
    const songs = await this.db.where({ bookId: bookId });
    return songs.map((s: Song) => s.getFields());
  }

  async Get(id: string) {
    const song = await this.db.get(id);
    return song ? song.getFields() : null;
  }

  async Create(params: tIndex) {
    return await this.db.create(validateSongParams(params));
  }

  async Update(id: number, params: tIndex) {
    let validParams = validateSongParams(params);
    console.log(id, params);
    const song = await this.db.update(id, validParams);
    return song.getFields();
  }
}

export default SongsController;
