export async function up(knex: any): Promise<any> {
  return knex.schema.hasTable("books").then((exists: boolean) => {
    if (!exists) {
      return knex.schema.createTable("books", (tbl: any) => {
        tbl.increments();
        tbl.string("title");
        tbl.integer("user_id");
        tbl.integer("year");
      });
    }
  });
}

export async function down(knex: any): Promise<any> {
  return knex.schema.dropTableIfExists("books");
}
