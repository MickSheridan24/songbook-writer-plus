const scripts = require("./sqlScripts")

class ColumnParser {
    constructor() {
        this._parsed = "";
        this._columns = [];
        this._postConfigs = [];
    }


    addColumn(type, name, options = {}) {
        let psh = name + " " + type;
        if (options.notNull) psh += " NOT NULL"
        this._columns.push(psh)
    }

    int(name, options) {
        this.addColumn("int", name, options);
    }

    string(name, options) {
        this.addColumn("varchar", name, options);
    }

    timestamp(name, options) {
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



async function createTable(cxn, name, columnCB) {

    let cp = new ColumnParser();
    columnCB(cp);
    let columns = cp.parse();
    await cxn.any(scripts.CreateTable, [name, columns]).catch(e => console.error("DBERROR in CrudMaster createTable", e))
}



module.exports = {
    createTable
}