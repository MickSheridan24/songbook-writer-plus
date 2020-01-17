import { Get, All, Where } from "../interfaces/accessors"
import { Create, Update, Delete } from "../interfaces/mutators"
import { iResource } from "../../types/modelTypes"

class DBContext {
    public static _t: string = ""
    static async get(id: string) {
        return await Get(this._t, id)
    }
    static async all() {
        return await All(this._t)
    }
    static async where(query: { [key: string]: string }) {
        return await Where(this._t, query);
    }
    static async create(params: iResource) {
        return await Create(this._t, params.getFields())
    }

}

export default DBContext