const knex = require("../../src/database/connect.js");

header = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
};

const scheduleFlightInput = {
    launchSiteId: 2,
    landingSiteId: 3,
    departureAt: "2022-09-07T00:00:00Z",
    seatCount: 10,
};

const flightId = /* await knex("flights").returning("id").insert(scheduleFlightInput)[0];*/ 73;

flightQuery = {
    query: `query flight($id: ID!) {
        flight(id: $id){
            id
            code
            launchSite {
                name
                planet {
                    name
                }
            }
            landingSite {
                name
                planet {
                    name
                }
            }
        }
    }`,
    variables: { id: flightId },
};

scheduleFlightMutation = {
    query: `mutation ScheduleFlight($input: flightInfo) {
        scheduleFlight(input: $input) {
            id
            code
            launchSite {
                name
            }
            landingSite {
                name
            }
            departureAt
            seatCount
            availableSeats
        } 
    }`,
    variables: {
        input: scheduleFlightInput,
    },
};

const scheduleFlightInvalidInput = {
    launchSiteId: "abcd",
    landingSiteId: "abcd",
    departureAt: "09/07/2022",
    seatCount: "abcd",
};

scheduleFlightInvalidMutation = {
    query: `mutation ScheduleFlight($input: flightInfo) {
        scheduleFlight(input: $input) {
            id
            code
            launchSite {
                name
            }
            landingSite {
                name
            }
            departureAt
            seatCount
            availableSeats
        } 
    }`,
    variables: {
        input: scheduleFlightInvalidInput,
    },
};

module.exports = {
    flightId,
    header,
    flightQuery,
    scheduleFlightInput,
    scheduleFlightMutation,
    scheduleFlightInvalidMutation,
};