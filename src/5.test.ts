import { intcode } from "./5";

test("intcode2", () => {
  expect(intcode([3, 0, 4, 0, 99], 4711).output).toEqual([4711]);
  expect(intcode([1002, 4, 3, 4, 33]).code).toEqual([1002, 4, 3, 4, 99]);
});
