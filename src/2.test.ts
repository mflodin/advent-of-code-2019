import { intcode } from "../dist/2";

test("intcode", () => {
  expect(intcode([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])).toStrictEqual([
    3500,
    9,
    10,
    70,
    2,
    3,
    11,
    0,
    99,
    30,
    40,
    50
  ]);

  expect(intcode([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]); //(1 + 1 = 2).
  expect(intcode([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99]); //(3 * 2 = 6).
  expect(intcode([2, 4, 4, 5, 99, 0])).toStrictEqual([2, 4, 4, 5, 99, 9801]); //(99 * 99 = 9801).
  expect(intcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual([
    30,
    1,
    1,
    4,
    2,
    5,
    6,
    0,
    99
  ]);
});
