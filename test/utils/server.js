const server = require("../../src/server");
const Koa = require("koa");
const knex = require("../../src/database/connect.js");

// Start new app and create new apollo server
exports.startServer = async() => {
    const app = new Koa();
    await server.start();
    await server.applyMiddleware({ app });
    const path = server.graphqlPath;
    // Return app and graphql path
    return { app, path };
}

// Stop server and close database connection
exports.stopServer = async() => {
    await server.stop();
    await knex.destroy();
}