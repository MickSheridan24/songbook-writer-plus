import DBContext from "./DBContext"

class UserContext extends DBContext {
    static _t: string = "users"
}

export default UserContext