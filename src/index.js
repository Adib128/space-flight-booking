const Koa = require("koa");
const server = require("./server");
const cors = require("@koa/cors");

const app = new Koa();
app.use(cors());

server.start().then(() => {
    server.applyMiddleware({ app, cors: false });
    app.listen({ port: 3000 });
});