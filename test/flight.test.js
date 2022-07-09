const request = require("supertest");
const server = require("../src/server");
const Koa = require("koa");
const knex = require("../src/database/connect.js");
const {
    header,
    flightQuery,
    scheduleFlightInput,
    scheduleFlightMutation,
    scheduleFlightInvalidMutation,
} = require("./utils/queries");

let url, path;
beforeAll(async() => {
    await server.start();
    const app = new Koa();
    server.applyMiddleware({ app });
    url = app.listen();
    path = server.graphqlPath;
});
afterAll(async() => {
    await server.stop();
});

describe("Test for the mutation", () => {
    it("It should create new flight and returning the flight information", async() => {

        const result = await request(url)
            .post(path)
            .set(header)
            .send(scheduleFlightMutation);

        const scheduleFlight = result.body.data.scheduleFlight;
        expect(result.errors).toBeUndefined();
        expect(scheduleFlight).toHaveProperty("id");
        expect(scheduleFlight).toHaveProperty("code");
        expect(scheduleFlight).toHaveProperty("availableSeats");
        expect(scheduleFlight.seatCount).toBe(scheduleFlightInput.seatCount);
        expect(scheduleFlight.launchSite).toHaveProperty("name");
        expect(scheduleFlight.landingSite).toHaveProperty("name");

    });
});

describe("Test for the mutation with invalid input", () => {
    it("It should return errors messages", async() => {

        const result = await request(url)
            .post(path)
            .set(header)
            .send(scheduleFlightInvalidMutation);

        const errors = result.body.errors;
        expect(errors.length).toBe(4);
        expect(errors[0]).toHaveProperty("message");
        expect(errors[0]).toHaveProperty("extensions");
        expect(errors[0].extensions).toMatchObject({ code: "BAD_USER_INPUT" });
    });
});

let flightId;
beforeEach(async() => {
    flightId = await knex("flights")
        .returning("id")
        .insert(scheduleFlightInput);
    console.log(flightId);
    flightId = "73";
});


describe("Test for the flight query", () => {
    it("It should return the flight information by Id", async() => {

        const result = await request(url).post(path).set(header).send(flightQuery);

        const flight = result.body.data.flight;
        expect(result.errors).toBeUndefined();
        expect(flight).toHaveProperty("id");
        expect(flight.id).toBe(flightId);
        expect(flight).toHaveProperty("launchSite");
        expect(flight.launchSite).toHaveProperty("name");
        expect(flight.launchSite).toHaveProperty("planet");
        expect(flight.launchSite.planet).toHaveProperty("name");
    });
});