// Serializer
import client from "../db/client";
class Chords {
    static async all(songId) {
        const chords = await client
            .select()
            .from("chords")
            .where("song_id", songId);
        return chords;
    }
    static async create(params) {
        const chord = await client("chords")
            .insert(params)
            .returning("*");
        return chord[0];
    }
}
export default Chords;
