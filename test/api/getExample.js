import request from "supertest";
import baseUrl from "../../env.js";

describe("GET Request Example", () => {
  it("Get User by Name", async () => {
    const response = request(baseUrl()).get("/user/nopevbf");
    console.log((await response).status);
    console.log((await response).body);
  });
});
