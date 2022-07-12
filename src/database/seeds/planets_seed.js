const planetsData = require("../../../data/planets");

exports.seed = function(knex) {
    // Deletes ALL existing planets
    return knex("planets")
        .del()
        .then(function() {
            // Inserts planets entries
            return knex("planets").insert(planetsData);
        });
};