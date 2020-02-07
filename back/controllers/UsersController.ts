import userDB from "../Models/contexts/UserContext"
import User from "../Models/User"
import { tIndex, Book } from "../types/modelTypes";


class BooksController {


    static async Update(id: number, params: tIndex) {
        console.log(id, params)
        const user = await userDB.update(id, params);
        return user.getFields()
    }
    static async Get(id: string) {
        const user = await userDB.get(id)
        return user.getFields()
    }

    static async Create(params: tIndex) {
        let user = new User(params)
        return await userDB.create(user)
    }
}

export default BooksController