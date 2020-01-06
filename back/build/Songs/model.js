import client from "../db/client";
import Chords from "../Chords/model";
class Songs {
    static async get(id, params = { getChords: false }) {
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
