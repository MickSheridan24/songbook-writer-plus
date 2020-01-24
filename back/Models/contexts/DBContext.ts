import { Get, All, Where } from "../interfaces/accessors"
import { Create, Update, Delete } from "../interfaces/mutators"
import { iResource, tIndex } from "../../types/modelTypes"

class DBContext {
    public static _t: string = ""
    static async get(id: string) {
        const r = await Get(this._t, id)
        console.log("CONTEXT", r)
        return r
    }
    static async all() {
        return await All(this._t)
    }
    static async where(query: tIndex) {
        return await Where(this._t, query);
    }
    static async create(params: iResource) {
        return await Create(this._t, params.getFields())
    }
    static async update(id: number, params: tIndex) {
        return await Update(this._t, id, params)
    }

}

export default DBContext