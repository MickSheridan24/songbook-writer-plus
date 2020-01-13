
import Base from "./BaseModel";

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
