const { generateText } = require("./util");

// UNIT TESTS

test("should output name and age", () => {
  const text = generateText("Zorana", 31);
  expect(text).toBe("Zorana (31 years old)");
//   const text2 = generateText("Anna", 28);
//   expect(text2).toBe("Anna (28 years old)");
});

// confirmation that we dont have false positive and opposites
// always good to have few examoples, but also the examples of the opposite answer 
// test("should output data0less text", () => {
//   const text = generateText("", null);
//   expect(text).toBe(" (null years old)");
// });


// INTEGRATION TESTS