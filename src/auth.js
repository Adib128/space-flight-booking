const auth = ({ ctx }) => {

    const header = ctx.headers.authorization;
    const token = header.split(" ")[1];

    const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

    if (token != testToken) {
        throw new Error("Authentication error");
    }
};

module.exports = auth;