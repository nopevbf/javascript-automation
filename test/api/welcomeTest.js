const assert = require("chai").assert;
const app = require("../../assert").default;
// Asserting
// Cara assert menggunakan chai
describe("Test API Welcome", function () {
  it("app should return welcome message", function () {
    assert.equal(app(), "Welcome to API Testing with Chai and Mocha");
  });
});
