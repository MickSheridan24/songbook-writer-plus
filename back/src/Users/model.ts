import client from "../dbBench";
import Base from "../Model/BaseModel"


type _user = {
  id: number;
  username: string;
  passwordDigest: string;
}
class Usere extends Base<_user> {
  static tableName = "users"
  constructor(params: _user) {
    super(params)
  }
};


export default User