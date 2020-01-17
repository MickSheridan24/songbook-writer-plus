
import { tIndex, iResource } from "../types/modelTypes"


abstract class BaseResource implements iResource {
    static tableName: string = "";
    public _fields: tIndex

    constructor(params: tIndex) {
        this._fields = params;

    }
    getFields(): tIndex {
        return this._fields;
    }
}


export default BaseResource;