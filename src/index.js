const Koa = require("koa");
const server = require("./server");

const app = new Koa();

server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000 });
});