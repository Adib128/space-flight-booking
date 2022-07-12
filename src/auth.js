const { ForbiddenError, AuthenticationError } = require("apollo-server-koa");
/*
 * Header token authentication
 */
const auth = ({ ctx }) => {
    // Check if the header authorization sent
    if (!ctx.headers.authorization) {
        throw new ForbiddenError("Unauthorized");
    }

    // Extract bearer token from authorization
    const header = ctx.headers.authorization;
    const token = header.split(" ")[1];

    // Static test token
    const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

    // Compare tokens 
    if (token != testToken) {
        throw new AuthenticationError("Authentication error");
    }
};

module.exports = auth;