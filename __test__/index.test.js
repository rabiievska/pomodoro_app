const { practiceTest } = require("../src/practiceTest");

describe("Test for initial Jest setup.", () => {
  describe("practiceTest", () => {
    test("Given 'Hello World', return 'Hello World!'", () => {
      const argument = "Hello World";
      const expected = "Hello World!";
      expect(practiceTest(argument)).toBe(expected);
    });
  });
});
