import Base from "./BaseModel"


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
};


export default User