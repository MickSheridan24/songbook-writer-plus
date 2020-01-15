import Base from "./BaseModel"
import { Get } from "./interfaces/accessors"

type _chord = {
  note: string;
  aspect: string;
  noteNum: number;
  line: number;
  character: number;
}


class Chords extends Base<_chord>{
  static tableName = "chords"
  constructor(params: _chord) {
    super(params)
  }

  static async get(id: string) {
    return Get(this.tableName, id)
  }
}

export default Chords;
