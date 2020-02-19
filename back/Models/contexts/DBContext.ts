import { Get, All, Where } from "../interfaces/accessors";
import { Create, Update, Delete } from "../interfaces/mutators";
import Song from "../Song";
import { iResource, tIndex } from "../../types/modelTypes";
import BaseModel from "../BaseModel";

abstract class DBContext {
  _t: string = "";

  async get(id: string) {
    const r = await Get(this._t, id);
    return this.returnModel(r);
  }
  async all() {
    const resources = await All(this._t);
    return resources.map((r: tIndex) => this.returnModel(r));
  }
  async where(query: tIndex) {
    const resources = await Where(this._t, query);
    return resources.map((r: tIndex) => this.returnModel(r));
  }
  async create(params: tIndex) {
    const fields = await Create(this._t, params);
    if (fields) {
      return this.returnModel(fields);
    } else return null;
  }
  async update(id: number, params: tIndex) {
    const updated = await Update(this._t, id, params);
    return this.returnModel(updated);
  }

  returnModel(fields: tIndex) {
    return new BaseModel(fields);
  }
}

export default DBContext;
