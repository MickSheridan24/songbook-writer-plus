import Base from "./BaseModel"
import { tIndex } from "../types/modelTypes";

class Song extends Base {
  public tableName: string = "songs"
  constructor(params: tIndex) {
    super(params);
  }
}

export default Song;
