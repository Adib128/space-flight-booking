const { UserInputError } = require("apollo-server-koa");

exports.paginationHandler = (result) => {
    return {
        pagination: {
            total: result.pagination.total,
            page: result.pagination.currentPage,
            pageSize: result.pagination.perPage,
        },
        nodes: result.data,
    };
};

exports.validateParamsOrThrowError = (page, pageSize) => {
    if (page < 1) {
        throw new UserInputError("Page number must be greater than 1");
    }
    if (pageSize < 1 || pageSize > 100) {
        throw new UserInputError("pageSize must be between 1 and 100");
    }
};