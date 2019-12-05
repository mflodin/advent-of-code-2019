import { findPasswords } from "./4";

test("findPasswords", () => {
  expect(
    findPasswords(["122345", "111123", "135679", "111111", "223450", "123789"])
  ).toStrictEqual(["122345", "111123", "111111"]);
});
