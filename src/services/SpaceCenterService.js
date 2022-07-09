const knex = require("../database/connect.js");
const { attachPaginate } = require("knex-paginate");
attachPaginate();

const findAll = async(args) => {
    const spaceCenters = await knex("space_centers").paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return {
        pagination: {
            total: spaceCenters.pagination.total,
            page: spaceCenters.pagination.currentPage,
            pageSize: spaceCenters.pagination.perPage,
        },
        nodes: spaceCenters.data,
    };
};

const findOne = async(args) => {
    return await knex("space_centers").where(args).first();
};

const findById = async(id) => {
    return await knex("space_centers").where({ id: id }).first();
};

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