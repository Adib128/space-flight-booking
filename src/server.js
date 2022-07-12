const { ApolloServer } = require("apollo-server-koa");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const typeDefs = require("./graphql/schemas/index");
const resolvers = require("./graphql/resolvers/index");
const auth = require("./auth");

// Create new apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: auth,
    csrfPrevention: true,
    introspection: true,
    //playground: true,
    //plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

module.exports = server;