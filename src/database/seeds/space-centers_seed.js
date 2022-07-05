const centersData = require("../../data/space-centers");

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("space_centers")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("space_centers").insert(centersData);
        });
};