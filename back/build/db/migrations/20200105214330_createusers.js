export async function up(knex) {
    return knex.schema.hasTable("users").then((exists) => {
        if (!exists) {
            return knex.schema.createTable("users", (tbl) => {
                tbl.increments();
                tbl.string("username");
                tbl.string("passwordDigest");
            });
        }
    });
}
export async function down(knex) {
    return knex.schema.dropTableIfExists("users");
}
