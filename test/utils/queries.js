// Schedule Flight Input
const scheduleFlightInput = {
    launchSiteId: 1,
    landingSiteId: 2,
    departureAt: "2022-09-07T00:00:00Z",
    seatCount: 10,
};

// static test ID
const flightId = "1";

// Query of returning flight by ID
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

// Mutation of schedule flight
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

// Invalid Schedule Flight Input
const scheduleFlightInvalidInput = {
    launchSiteId: "abcd",
    landingSiteId: "abcd",
    departureAt: "09/07/2022",
    seatCount: "abcd",
};

// Invalid mutation of schedule flight
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

// Static test header
header = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
};

module.exports = {
    flightId,
    header,
    flightQuery,
    scheduleFlightInput,
    scheduleFlightMutation,
    scheduleFlightInvalidMutation,
};