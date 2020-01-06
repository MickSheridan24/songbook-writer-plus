export async function up(knex) {
    return knex.schema.hasTable("songs").then((exists) => {
        if (!exists) {
            return knex.schema.createTable("songs", (tbl) => {
                tbl.increments();
                tbl.string("title");
                tbl.integer("user_id");
                tbl.string("artist");
                tbl.string("text");
            });
        }
    });
}
export async function down(knex) {
    return knex.schema.dropTableIfExists("songs");
}
