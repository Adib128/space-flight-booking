const paginationHandler = (result) => {
    return {
        pagination: {
            total: result.pagination.total,
            page: result.pagination.currentPage,
            pageSize: result.pagination.perPage,
        },
        nodes: result.data,
    };
};

module.exports = paginationHandler;