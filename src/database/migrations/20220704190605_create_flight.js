/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("flights", function(table) {
        table.increments("id");
        table.string("code").notNullable();
        table.integer("launchSite").unsigned();
        table.foreign("launchSite").references("space_centers.id");
        table.integer("landingSite").unsigned();
        table.foreign("landingSite").references("space_centers.id");
        table.datetime("departureAt").notNullable();
        table.integer("seatCount").notNullable();
        table.integer("availableSeats").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("flights");
};