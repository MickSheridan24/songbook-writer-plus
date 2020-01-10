import { Cxn } from "../../types/dbtypes";

import { CreateTable } from "./sqlScripts";

type parserOps = {
    notNull?: boolean;
}

class ColumnParser {
    _parsed: string;
    _columns: string[];
    _postConfigs: string[];


    constructor() {
        this._parsed = "";
        this._columns = [];
        this._postConfigs = [];
    }


    addColumn(type: string, name: string, options: parserOps = {}) {
        let psh = name + " " + type;
        if (options.notNull) psh += " NOT NULL"
        this._columns.push(psh)
    }

    int(name: string, options: parserOps = {}) {
        this.addColumn("int", name, options);
    }

    string(name: string, options: parserOps = {}) {
        this.addColumn("varchar", name, options);
    }

    timestamp(name: string, options: parserOps = {}) {
        this.addColumn("timestamp", name, options);
    }

    id() {
        this.addColumn("serial", "id", { notNull: true });
        this._postConfigs.push("Primary Key(id)")
    }

    parse() {
        for (let x = 0; x < this._columns.length; x++) {
            if (x != 0) this._parsed += ", ";
            this._parsed += this._columns[x];
        }
        if (this._postConfigs.length) {
            for (let x = 0; x < this._postConfigs.length; x++) {
                this._parsed += ", ";
                this._parsed += this._postConfigs[x];
            }
        }
        return this._parsed;
    }

}



async function createTable(cxn: Cxn, name: string, columnCB: (_: ColumnParser) => void) {

    let cp = new ColumnParser();
    columnCB(cp);
    let columns = cp.parse();
    console.log(columns)
    await cxn.any(CreateTable, [name, columns]).catch(e => console.error("DBERROR in CrudMaster createTable", e))
}


let cm = { createTable }
export default cm;