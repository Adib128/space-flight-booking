/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("bookings", function(table) {
        table.increments("id");
        table.integer("flight").unsigned();
        table.foreign("flight").references("flights.id");
        table.integer("seatCount").notNullable();
        table.string("email").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("bookings");
};