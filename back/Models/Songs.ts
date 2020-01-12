import client from "../dbBench";
import Chords from "../Chords/model";
import Base from "../Model/BaseModel";

interface _song {
  id: number;
  title: string;
  userId: number;
  artist: string;
  text: string;
};

class Song extends Base<_song>{
  static tableName = "songs"
  constructor(params: _song) {
    super(params);
  }
}

export default Song;
