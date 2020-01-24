import { getResource, getAll, getWhere } from "../../db/Client"
import { tIndex } from "../../types/modelTypes"




const Get = async (table: string, id: string) => {
    console.log("GET", id)
    const r = await getResource(table, id)
    console.log("ACCESSOR", r)
    return r
}

const All = async (table: string) => {
    return await getAll(table)
}

const Where = async (table: string, query: tIndex) => {
    return await getWhere(table, _processQuery(query))
}

const _processQuery = (q: tIndex) => {
    let ret = "";
    for (let i = 0; i < Object.keys(q).length; i++) {
        if (i != 0) ret += " AND ";
        let key = Object.keys(q)[i];
        ret += key + "= '" + q[key] + "'";
    }
    return ret;
}

export { Get, All, Where }