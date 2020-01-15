import { CreateResource } from "../../db/Client"

const Create = async<T>(table: string, params: T) => {
    return await CreateResource(table, params);
}

const Update = <T>(table: string, id: number, params: T) => {

}
const Delete = <T>(table: string, id: number) => {

}

export { Create, Update, Delete }