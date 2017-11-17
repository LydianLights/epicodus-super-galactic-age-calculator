import { Age } from "./../js/Age.js"

describe("Age constructor", function() {
  it("should find a person's age based on their birthday" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.origin).toEqual(birthday);
  });
});

describe("Age getInSeconds", function() {
  it("should give a person's age in seconds" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInSeconds()).not.toBeLessThan(835007306);
  });
});

describe("Age getInYears", function() {
  it("should give a person's age in years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInYears()).not.toBeLessThan(26);
  });
});

describe("Age getInMercuryYears", function() {
  it("should give a person's age in years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInMercuryYears()).not.toBeLessThan(26 * .24);
  });
});

describe("Age getInVenusYears", function() {
  it("should give a person's age in years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInVenusYears()).not.toBeLessThan(26 * .62);
  });
});

describe("Age getInMarsYears", function() {
  it("should give a person's age in years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInMarsYears()).not.toBeLessThan(26 * 1.88);
  });
});

describe("Age getInJupiterYears", function() {
  it("should give a person's age in years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInJupiterYears()).not.toBeLessThan(26 * 11.86);
  });
});
