const { ApolloServer } = require("apollo-server-koa");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");

const Koa = require("koa");

const app = new Koa();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    introspection: true,
    playground: true,
});

server.start().then((res) => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () =>
        console.log("Now browse to http://localhost:3000" + server.graphqlPath)
    );
});