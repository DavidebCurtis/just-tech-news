const express = require("express");
const router = require("../routes");
const request = require("supertest");
jest.mock("../models");

const app = express();
app.use("/", router);

describe("Test routes", () => {
  test("responds to /api/users/", async () => {
    const res = await request(app).get("/api/users/");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(500);
  });
});
