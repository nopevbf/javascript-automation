import request from "supertest";
import baseUrl from "../../env.js";
import DATA from "../../data/userData.js";

describe("POST Request Example", () => {
  it("Create User", async () => {
    const response = request(baseUrl()).post("/user").send(DATA.CREATE_USER);
    console.log((await response).status);
    console.log((await response).body);
  });
});
