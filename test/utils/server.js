const server = require("../../src/server");
const Koa = require("koa");
const knex = require("../../src/database/connect.js");

let url, path;

const startServer = async() => {
    await server.start();
    const app = new Koa();
    server.applyMiddleware({ app });
    app.listen();
    path = await server.graphqlPath;
}

const stopServer = async() => {
    await server.stop();
}

module.exports = {
    startServer,
    stopServer,
    url,
    path
};