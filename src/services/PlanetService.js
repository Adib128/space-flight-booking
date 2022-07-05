const knex = require("../database/connect.js");

const findAll = async() => {
    return await knex("planets").select("*");
};

const findByCode = async(code) => {
    return await knex("planets").where({ code: code }).first();
};

module.exports = {
    findAll,
    findByCode
};