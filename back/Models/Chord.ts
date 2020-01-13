import Base from "./BaseModel"

type _chord = {
  note: string;
  aspect: string;
  noteNum: number;
  line: number;
  offset: number;
}


class Chords extends Base<_chord>{
  static tableName = "chords"
  constructor(params: _chord) {
    super(params)
  }
}

export default Chords;
