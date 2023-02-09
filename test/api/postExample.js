import request from "supertest";
import baseUrl from "../../env.js";

describe("POST Request Example", () => {
  it("Create User", async () => {
    const response = request(baseUrl()).post("/user").send({
      id: 123456,
      username: "nopevbf",
      firstName: "firman",
      lastName: "aji",
      email: "furiamnjay+test@gmail.com",
      password: "123456789",
      phone: "082298507500",
      userStatus: 1,
    });
    console.log((await response).status);
    console.log((await response).body);
  });
});
