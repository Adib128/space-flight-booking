const planetsData = require("../../../data/planets");

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("planets")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("planets").insert(planetsData);
        });
};