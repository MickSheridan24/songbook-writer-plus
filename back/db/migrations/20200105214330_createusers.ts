export async function up(knex: any): Promise<any> {
  return knex.schema.hasTable("users").then((exists: boolean) => {
    if (!exists) {
      return knex.schema.createTable("users", (tbl: any) => {
        tbl.increments();
        tbl.string("username");
        tbl.string("passwordDigest");
      });
    }
  });
}

export async function down(knex: any): Promise<any> {
  return knex.schema.dropTableIfExists("users");
}
