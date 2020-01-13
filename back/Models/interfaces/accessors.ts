import { getResource, getAll, getWhere } from "../../db/Client"




const Get = async (table: string, id: string) => {
    console.log("GET", id)
    return await getResource(table, id)
}

const All = async (table: string) => {
    return await getAll(table)
}

const Where = async (table: string, query: string) => {
    return await getWhere(table, query)
}


export { Get, All, Where }