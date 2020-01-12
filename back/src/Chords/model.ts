import client from "../dbBench";

class Chords {
  note: string;
  aspect: string;
  noteNum: number;
  line: number;
  offset: number;

  constructor(params: {
    note: string,
    aspect: string,
    noteNum: number,
    line: number,
    offset: number
  }) {
    this.note = params.note
    this.aspect = params.aspect
    this.noteNum = params.noteNum
    this.line = params.line
    this.offset = params.offset

  }


}

export default Chords;
