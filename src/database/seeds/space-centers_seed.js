const spaceCentersData = require("../../../data/space-centers");

exports.seed = function(knex) {
    // Deletes ALL existing spaceCenters
    return knex("space_centers")
        .del()
        .then(function() {
            // Inserts seed spaceCenters
            return knex("space_centers").insert(spaceCentersData);
        });
};