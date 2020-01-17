import Base from "./BaseModel"
import { Get, All, Where } from "./interfaces/accessors"
import { Create, Update, Delete } from "./interfaces/mutators"

type index = { [_: string]: string | number | boolean }


class Song extends Base {
  static tableName = "songs"
  constructor(params: index) {
    super(params);
  }

  static async get(id: string) {
    return Get(this.tableName, id)
  }
}




export default Song;
