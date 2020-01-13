import { getResource, getAll, getWhere } from "../../db/Client"




const Get = async (table: string, id: string) => {
    console.log("GET", id)
    return await getResource(table, id)
}

const All = async (table: string) => {
    return await getAll(table)
}

const Where = async (table: string, query: { [key: string]: string }) => {
    return await getWhere(table, _processQuery(query))
}

const _processQuery = (q: { [key: string]: string }) => {
    let ret = "";
    for (let i = 0; i < Object.keys(q).length; i++) {
        if (i != 0) ret += " AND ";
        let key = Object.keys(q)[i];
        ret += key + "= '" + q[key] + "'";
    }
    return ret;
}

export { Get, All, Where }