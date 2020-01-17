import Base from "./BaseModel"
import { Get, All, Where } from "./interfaces/accessors"
import { Create, Update, Delete } from "./interfaces/mutators"

type index = { [_: string]: string | number | boolean }

class User extends Base {
  static tableName = "users"
  constructor(params: index) {
    super(params)
  }

  static async get(id: string) {
    return Get(this.tableName, id)
  }
};


export default User