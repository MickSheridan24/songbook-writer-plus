import Base from "./BaseModel"
import { Get } from "./interfaces/accessors"

type _user = {
  id: number;
  username: string;
  passwordDigest: string;
}
class User extends Base<_user> {
  static tableName = "users"
  constructor(params: _user) {
    super(params)
  }

  static async get(id: string) {
    return Get(this.tableName, id)
  }
};


export default User