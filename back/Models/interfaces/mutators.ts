import { CreateResource } from "../../db/Client"

type DBReady = { [key: string]: string | boolean | number }

function paramsAreDBReady(params: unknown): params is DBReady {
    let ready = true
    let dbr = <DBReady>params
    if (typeof dbr === "object") {
        for (const key in dbr) {
            if (typeof key !== "string") ready = false;
            if (!(typeof dbr[key] === "string" || typeof dbr[key] === "boolean" || typeof dbr[key] === "number")) ready = false;
        }
    } else ready = false;
    return ready;
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