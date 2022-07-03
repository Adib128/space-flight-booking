const knex = require("../db/db");
const resolvers = {
    Query: {
        planets() {
            return knex("planets").select("*");
        },
    },
};

module.exports = { resolvers };