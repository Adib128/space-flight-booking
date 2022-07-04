/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("space_centers", function(table) {
        table.increments("id");
        table.string("name").notNullable();
        table.string("uid").unique().notNullable();
        table.text("description");
        table.decimal("latitude").notNullable();
        table.decimal("longitude").notNullable();
        table.string("planet_code", 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("space_centers");
};