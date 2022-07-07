const knex = require("../database/connect.js");
const crypto = require("crypto");

const findAll = async(args) => {
    const query = knex("flights");
    const where = {};
    if (args.from) {
        where.launchSite = args.from;
    }
    if (args.to) {
        where.landingSite = args.to;
    }
    if (args.departureAt) {
        where.landingSite = args.departureAt;
    }
    query.where(where);
    const flights = query.paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return {
        pagination: {
            total: flights.pagination.total,
            page: flights.pagination.currentPage,
            pageSize: flights.pagination.perPage,
        },
        nodes: flights.data,
    };
};
const findOne = async(args) => {
    return await knex("flights").where(args).first();
};

const create = async(input) => {
    const flight = {
        code: crypto.randomBytes(16).toString("hex"),
        launchSite: input.launchSiteId,
        landingSite: input.landingSiteId,
        departureAt: input.departureAt,
        seatCount: input.seatCount,
        availableSeats: input.seatCount,
    };
    const insertedData = await knex("flights").returning("id").insert(flight);
    return insertedData[0];
};

module.exports = {
    findAll,
    findOne,
    create
};