import { CreateResource } from "../../db/Client"

type DBReady = { [key: string]: string }

function paramsAreDBReady(params: unknown): params is DBReady {
    console.log(!!(params as DBReady).type, params)
    return !!(params as DBReady).type;
}

const Create = async<T>(table: string, params: T) => {
    console.log("INTERFACE")
    if (paramsAreDBReady(params)) {
        return await CreateResource(table, params);
    }
}

const Update = <T>(table: string, id: number, params: T) => {

}
const Delete = <T>(table: string, id: number) => {

}

export { Create, Update, Delete }