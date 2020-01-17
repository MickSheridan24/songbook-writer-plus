import { CreateResource } from "../../db/Client"
import { iResource, tIndex } from "../../types/modelTypes"




const Create = async (tableName: string, params: tIndex) => {
    console.log("INTERFACE");
    return await CreateResource(tableName, params);
}

const Update = <T>(table: string, id: number, params: T) => {

}
const Delete = <T>(table: string, id: number) => {

}

export { Create, Update, Delete }