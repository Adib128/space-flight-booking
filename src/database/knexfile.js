const dotenv = require("dotenv");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        /*
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        */
        client: "postgresql",
        connection: {
            database: "space",
            user: "postgres",
            password: "123456",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },
};