import supertest from "supertest";
import server from "../src/server";
import mongoose from "mongoose";
import accommodationsSchema from "../src/models/index.ts";

describe("Checking application main endpoints", () => {
  it("should check that the / endpoint is working", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBeDefined();
  });

  const validData = {
    name: "test",
    description: "Test description",
    city: "city",
    maxGuests: 10,
  };

  it("should check that the /products endpoint is allowing POST requests with valid data", async () => {
    const response = await request.post("/").send(validData);
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
    expect(response.body.description).toEqual(validData.description);
  });

  const invalidData = {
    description: "Test accomondation",
  };

  it("should check that the /products endpoint is NOT allowing POST requests with invalid data", async () => {
    const response = await request.post("/").send(invalidData);
    expect(response.status).toBe(400);
    expect(response.body._id).not.toBeDefined();
  });

  it("should test that the / endpoint is returning valid data after creating", async () => {
    const response = await request.post("/").send(validData);

    expect(response.body._id).toBeDefined();

    const accommodation = await accommodationsSchema.findById(response.body._id);

    expect(accommodation.createdAt).toStrictEqual(new Date(response.body.createdAt));
  });

  it("should test that the / endpoint is returning all the accommodations available", async () => {
    const accommodationsResponse = await request.post("/").send(validData);

    const response = await request.get("/");

    const included = response.body.some((accommodation) => accommodation._id === accommodationsResponse.body._id);

    expect(included).toBe(true);
  });
});
