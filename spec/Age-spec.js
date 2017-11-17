import { Age } from "./../js/Age.js"

describe("Age constructor", function() {
  it("should define an age based on a start and end point" , function() {
    let fromDate = new Date(1901, 1, 1);
    let toDate = new Date(2001, 1, 1);
    let testAge = new Age(fromDate, toDate);
    expect(testAge._fromDate).toEqual(fromDate);
    expect(testAge._toDate).toEqual(toDate);
  });
  it("should default to 'now' if no toDate specified" , function() {
    let fromDate = new Date(1991, 5, 3);
    let testAge = new Age(fromDate);
    expect(testAge._toDate).toEqual("now");
  });
});

describe("Age getInSeconds", function() {
  it("should calculate the time difference in seconds between the start and end time" , function() {
    let fromDate = new Date(1901, 1, 1);
    let toDate = new Date(2001, 1, 1);
    let testAge = new Age(fromDate, toDate);
    expect(testAge.getInSeconds()).toEqual(3155760000);
  });
  it("should calculate the age relative to today if end time is 'now'" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInSeconds()).not.toBeLessThan(835007306);
  });
});

describe("Age getInYears", function() {
  it("should calculate the age in years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInYears()).not.toBeLessThan(26);
  });
});

describe("Age getInMercuryYears", function() {
  it("should calculate the age in mercury years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInMercuryYears()).not.toBeLessThan(26 * .24);
  });
});

describe("Age getInVenusYears", function() {
  it("should calculate the age in venus years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInVenusYears()).not.toBeLessThan(26 * .62);
  });
});

describe("Age getInMarsYears", function() {
  it("should calculate the age in mars years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInMarsYears()).not.toBeLessThan(26 * 1.88);
  });
});

describe("Age getInJupiterYears", function() {
  it("should calculate the age in jupiter years" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.getInJupiterYears()).not.toBeLessThan(26 * 11.86);
  });
});
