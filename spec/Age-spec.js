import { Age } from "./../js/Age.js"

describe("Age constructor", function() {
  it("should find a person's age based on their birthday" , function() {
    let birthday = new Date(1991, 5, 3);
    let testAge = new Age(birthday);
    expect(testAge.origin).toEqual(birthday);
  });
});
