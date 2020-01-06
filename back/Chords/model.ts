// Serializer
import client from "../db/knex";

type Chord = {
  note: string;
  aspect: string;
  note_num: number;
  line: number;
  offset: number;
};

class Chords {
  static async all(songId: number): Promise<Chord> {
    const chords = await client
      .select()
      .from("chords")
      .where("song_id", songId);
    return chords;
  }
  static async create(params: Chord): Promise<Chord> {
    const chord = await client("chords")
      .insert(params)
      .returning("*");
    return chord[0];
  }
}

export default Chords;
