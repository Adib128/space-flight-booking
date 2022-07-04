const knex = require("../db/db");
const { attachPaginate } = require("knex-paginate");
attachPaginate();
const resolvers = {
    Query: {
        planets: async() => {
            return await knex("planets").select("*");
        },
        spaceCenters: async(__, args) => {
            const centers = await knex("space_centers").paginate({
                perPage: args.pageSize,
                currentPage: args.page,
                isLengthAware: true,
            });
            const data = {
                pagination: {
                    total: centers.pagination.total,
                    page: centers.pagination.currentPage,
                    pageSize: centers.pagination.perPage,
                },
                nodes: centers.data,
            };
            return data;
        },
        spaceCenter: async(__, args) => {
            if (!args.id && !args.uid) {
                throw new Error("Specify id or uid of the space center");
            }
            return await knex("space_centers").where(args).first();
        },
    },

    Planet: {
        spaceCenters: async(planet, args) => {
            return await knex("space_centers")
                .where({ planet_code: planet.code })
                .select("*")
                .limit(args.limit);
        },
    },

    SpaceCenter: {
        planet: async(spaceCenter, args) => {
            return await knex("planets")
                .where({ code: spaceCenter.planet_code })
                .first();
        },
    },
};

module.exports = { resolvers };