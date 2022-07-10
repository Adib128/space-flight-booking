const { ForbiddenError, AuthenticationError } = require("apollo-server-koa");

const auth = ({ ctx }) => {
    if (!ctx.headers.authorization) {
        throw new ForbiddenError("Unauthorized");
    }
    const header = ctx.headers.authorization;
    const token = header.split(" ")[1];

    const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

    if (token != testToken) {
        throw new AuthenticationError("Authentication error");
    }
};

module.exports = auth;