export async function up(knex) {
    return knex.schema.hasTable("chords").then((exists) => {
        if (!exists) {
            return knex.schema.createTable("chords", (tbl) => {
                tbl.increments();
                tbl.string("note");
                tbl.integer("noteNum");
                tbl.string("aspect");
                tbl.integer("offset");
                tbl.integer("line");
            });
        }
    });
}
export async function down(knex) {
    return knex.schema.dropTableIfExists("chords");
}
