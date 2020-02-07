import DBContext from "./DBContext"
import User from "../User"
import { tIndex } from "../../types/modelTypes"

class UserContext extends DBContext {
    static _t: string = "users"


    static returnModel(fields: tIndex): User {
        return new User(fields);
    }
}

export default UserContext