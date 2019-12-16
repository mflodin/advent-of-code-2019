import { findPasswords, findPasswords2 } from "./4";

test("findPasswords", () => {
  expect(
    findPasswords(["122345", "111123", "135679", "111111", "223450", "123789"])
  ).toStrictEqual(["122345", "111123", "111111"]);
});

test("findPasswords2", () => {
  expect(
    findPasswords2([
      "112233",
      "123444",
      "111122",
      "122345",
      "111123",
      "135679",
      "111111",
      "111222",
      "223450",
      "123789"
    ]).length
  ).toBe(["112233", "111122", "122345"].length);
});
