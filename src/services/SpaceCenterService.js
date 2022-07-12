const knex = require("../database/connect.js");
const { attachPaginate } = require("knex-paginate");
const { validateParamsOrThrowError, paginationHandler } = require("./utils");
attachPaginate();

/**
 * Find spaceCenters in database 
 * @param {Object} args
 * @return {Array} spaceCenters
 */
const findAll = async(args) => {
    // Validate page and pageSize argument or throw error
    validateParamsOrThrowError(args.page, args.pageSize);
    // Select spaceCenters from database with pagination
    const spaceCenters = await knex("space_centers").paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return paginationHandler(spaceCenters);
};

/**
 * Find a spaceCenter in database by ID
 * @param {Object} args
 * @return {Object} spaceCenter
 */
const findOne = async(args) => {
    return await knex("space_centers").where(args).first();
};

/**
 * Find a spaceCenter in database by ID
 * @param {number} id
 * @return {Object} spaceCenter
 */
const findById = async(id) => {
    return await knex("space_centers").where({ id: id }).first();
};

/**
 * Find spaceCenters in database by planet_code 
 * @param {string} code
 * @param {number} limit
 * @return {Array} spaceCenters
 */
const findByPlanetCode = async(code, limit) => {
    return await knex("space_centers")
        .where({ planet_code: code })
        .select("*")
        .limit(limit);
};

module.exports = {
    findAll,
    findOne,
    findById,
    findByPlanetCode,
};