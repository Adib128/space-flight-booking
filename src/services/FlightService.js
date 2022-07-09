const knex = require("../database/connect.js");
const crypto = require("crypto");

const findAll = async(args) => {
    const flights = await knex("flights").andWhere(function() {
        if (args.from) {
            this.where("launchSite", args.from);
        }
        if (args.to) {
            this.where("landingSite", args.to);
        }
        if (args.seatCount) {
            this.where("seatCount", args.seatCount);
        }
        if (args.departureDay) {
            this.where("departureAt", "=", args.departureDay);
        }
    }).paginate({
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
}