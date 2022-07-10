const knex = require("../database/connect.js");
const crypto = require("crypto");
const { validateParamsOrThrowError, paginationHandler } = require("./utils");

const findAll = async(args) => {
    validateParamsOrThrowError(args.page, args.pageSize);
    const flights = await knex("flights").andWhere(function() {
        this.where("seatCount", args.seatCount);
        if (args.from) {
            this.where("launchSite", args.from);
        }
        if (args.to) {
            this.where("landingSite", args.to);
        }
        if (args.departureDay) {
            this.where("departureAt", "=", args.departureDay);
        }
    }).paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return paginationHandler(flights);
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