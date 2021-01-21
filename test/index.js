const swiftcodes = require("../index.js");
const chai = require("chai");
let should = chai.should();

const validSWIFTs = ["BAIPAOLU", "WAFTWF21", "AARUGB21", "RIVEGB21CTY"];
const invalidSWIFTs = ["kkjgkjghk", "GYTFCJG67", "1111"];

describe("extract", function () {
  it("Should return bank details object for valid SWIFT codes", function () {
    for (code of validSWIFTs) {
      const bank = swiftcodes.extract(code);
      bank.should.be
        .an("object")
        .and.have.keys("bank", "city", "branch", "id", "swift_code");
      bank.swift_code.should.be.equal(code);
    }
  });

  it("Should return false if SWIFT code not found", function () {
    for (code of invalidSWIFTs) {
      const bank = swiftcodes.extract(code);
      bank.should.be.equal(false);
    }
  });
});
