const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

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
test("Shoukd generate a text valid output", () => {
  const text = checkAndGenerate("Zorana", 31);
  expect(text).toBe("Zorana (31 years old)");
});

// PUPPETEER TEST
test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920, 1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///home/zorana/repos/testing-js-introduction/js-testing-introduction/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", el => el.textContent);
  expect(finalText).toBe("Anna (28 years old)")
}, 10000);
