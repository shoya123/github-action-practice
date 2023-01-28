// const assert = require("assert");
// const jest = require("jest");

const fizzbuzz = require("../index");
describe("fizzbuzz", () => {
  it("returns FizzBuzz when value is divisible by 15", () => {
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });
  it("returns Fizz when value is divisible by 3", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });
  it("returns Buzz when value is divisible by 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
  it("returns the value when value is not divisible by 3 or 5", () => {
    expect(fizzbuzz(7)).toEqual("7");
  });
});
