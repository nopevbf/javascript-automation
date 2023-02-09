import { expect } from "chai";
import request from "supertest";
import baseUrl from "../../env.js";
import DATA from "../../data/userData.js";

describe("Expect Response", () => {
  const response = request(baseUrl()).post("/user").send(DATA.CREATE_USER);

  it("should return status equal 200", async () => {
    expect((await response).status).to.equal(200);
  });
  it("should body to haveOwnProperty", async () => {
    expect((await response).body).to.haveOwnProperty("code");
    expect((await response).body).to.haveOwnProperty("type");
    expect((await response).body).to.haveOwnProperty("message");
  });

  //Example of unexpected response
  // it("should return status equal 200", async () => {
  //   expect((await response).status).to.equal(201);
  // });
  // it("should body to haveOwnProperty", async () => {
  //   expect((await response).body).to.haveOwnProperty("id");
  // });
});
