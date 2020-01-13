
import Base from "./BaseModel";
import { Get } from "./interfaces/accessors"

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

  static async get(id: string) {
    return Get(this.tableName, id)
  }
}




export default Song;
