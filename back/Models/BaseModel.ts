import { getResource } from "../db/Client"



class BaseResource<T> {
    static tableName: string
    fields: T
    constructor(params: T) {
        this.fields = params;
    }
}


export default BaseResource;