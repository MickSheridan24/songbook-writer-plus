import Base from "./BaseModel"
import { tIndex } from "../types/modelTypes"

class Chords extends Base {
  public tableName: string = "chords"
  constructor(params: tIndex) {
    super(params)
  }
}

export default Chords;
