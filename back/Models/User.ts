import Base from "./BaseModel"
import { tIndex } from "../types/modelTypes"

class User extends Base {
  public tableName = "users"
  constructor(params: tIndex) {
    super(params)
  }
};

export default User