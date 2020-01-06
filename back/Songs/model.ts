import client from "../db/client";
import Chords from "../Chords/model";

type Song = {
  title: string;
  userId: number;
  artist: string;
  text: string;
};

class Songs {
  static async get(
    id: number,
    params: { getChords: boolean } = { getChords: false }
  ): Promise<Song> {
    const res = await client
      .select()
      .from("songs")
      .where("id", id);
    const song = { ...res[0] };
    if (params.getChords) {
      song.chords = await Chords.all(id);
    }
    return song;
  }
}

export default Songs;
