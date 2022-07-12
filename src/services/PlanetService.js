const knex = require("../database/connect.js");

/**
 * Find planets in database 
 * @return {Array} planets
 */
const findAll = async() => {
    return await knex("planets").select("*");
};

/**
 * Find a plaent in database by code
 * @param {string} code
 * @return {Object} planet
 */
const findByCode = async(code) => {
    return await knex("planets").where({ code: code }).first();
};

module.exports = {
    findAll,
    findByCode
};