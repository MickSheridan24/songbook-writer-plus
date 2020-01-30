import { Get, All, Where } from "../interfaces/accessors"
import { Create, Update, Delete } from "../interfaces/mutators"
import { iResource, tIndex } from "../../types/modelTypes"
import BaseModel from "../BaseModel"

class DBContext {
    public static _t: string = ""
    static async get(id: string) {
        const r = await Get(this._t, id)
        return this.returnModel(r)
    }
    static async all() {
        const resources = await All(this._t)
        return resources.map((r: tIndex) => this.returnModel(r))
    }
    static async where(query: tIndex) {
        const resources = await Where(this._t, query);
        return resources.map((r: tIndex) => this.returnModel(r))
    }
    static async create(params: iResource) {
        return await Create(this._t, params.getFields())
    }
    static async update(id: number, params: tIndex) {
        return await Update(this._t, id, params)
    }

    static returnModel(fields: tIndex): BaseModel | null {
        return null;
    }

}

export default DBContext