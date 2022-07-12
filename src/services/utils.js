const { UserInputError } = require("apollo-server-koa");

/**
 * Return a paginated result of a query
 * @param {Array} result
 * @return {Array} flight
 */
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

/**
 * Vlidate paramters min and max
 * @param {number} page
 * @param {number} pageSize
 */
exports.validateParamsOrThrowError = (page, pageSize) => {
    // Check if less than 1 throw error
    if (page < 1) {
        throw new UserInputError("Page number must be greater than 1");
    }

    // Check if less than 1 and greater than 100 throw error
    if (pageSize < 1 || pageSize > 100) {
        throw new UserInputError("pageSize must be between 1 and 100");
    }
};