const express = require("express");
const router = require("../routes");
const request = require("supertest");

const app = express();
app.use("/", router);

describe("Test routes", () => {
  test("responds to /api/users/", async () => {
    const res = await request(app).get("/api/users/");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(500);
  });
});
