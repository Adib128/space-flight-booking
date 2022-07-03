const resolvers = {
    Query: {
        getAllUsers() {
            return [{ name: "Adib", age: 30 }];
        }
    },
};

module.exports = { resolvers }