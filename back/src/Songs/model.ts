import client from "../dbBench";
import Chords from "../Chords/model";
import Base from "../Model/BaseModel";

type song = {
  id: number;
  title: string;
  userId: number;
  artist: string;
  text: string;
};

class Song extends Base<song>{
  static tableName = "songs"
  constructor(params: song) {
    super(params);
  }
}

export default Song;
