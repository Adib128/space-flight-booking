const { ApolloServer } = require("apollo-server-koa");
const typeDefs = require("./graphql/schemas/index");
const resolvers = require("./graphql/resolvers");
const auth = require("./auth");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: auth,
    csrfPrevention: true,
    cache: "bounded",
    introspection: true,
});

module.exports = server;