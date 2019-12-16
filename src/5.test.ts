import { intcode } from "./5";

test("intcode2", () => {
  expect(intcode([3, 0, 4, 0, 99], 4711).output).toEqual([4711]);
  expect(intcode([1002, 4, 3, 4, 33]).code).toEqual([1002, 4, 3, 4, 99]);
});

test("is equal to 8 (position mode)", () => {
  const code = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8];
  expect(intcode(code, 8).output[0]).toBe(1);
  expect(intcode(code, 4).output[0]).toBe(0);
});

test("is less than 8 (position mode)", () => {
  const code = [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8];
  expect(intcode(code, 9).output[0]).toBe(0);
  expect(intcode(code, 8).output[0]).toBe(0);
  expect(intcode(code, 4).output[0]).toBe(1);
});

test("is equal to 8 (immediate mode)", () => {
  const code = [3, 3, 1108, -1, 8, 3, 4, 3, 99];
  expect(intcode(code, 8).output[0]).toBe(1);
  expect(intcode(code, 4).output[0]).toBe(0);
});

test("is equal to 8 (immediate mode)", () => {
  const code = [3, 3, 1107, -1, 8, 3, 4, 3, 99];
  expect(intcode(code, 12).output[0]).toBe(0);
  expect(intcode(code, 8).output[0]).toBe(0);
  expect(intcode(code, 4).output[0]).toBe(1);
});

test("is not equal to 0 (position mode)", () => {
  const code = [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9];
  expect(intcode(code, 12).output[0]).toBe(1);
  expect(intcode(code, -8).output[0]).toBe(1);
  expect(intcode(code, 0).output[0]).toBe(0);
});

test("is not equal to 0 (immediate mode)", () => {
  const code = [3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1];
  expect(intcode(code, 12).output[0]).toBe(1);
  expect(intcode(code, -8).output[0]).toBe(1);
  expect(intcode(code, 0).output[0]).toBe(0);
});

test("is equal to, less than, or smaller than 8", () => {
  const code = [
    3,
    21,
    1008,
    21,
    8,
    20,
    1005,
    20,
    22,
    107,
    8,
    21,
    20,
    1006,
    20,
    31,
    1106,
    0,
    36,
    98,
    0,
    0,
    1002,
    21,
    125,
    20,
    4,
    20,
    1105,
    1,
    46,
    104,
    999,
    1105,
    1,
    46,
    1101,
    1000,
    1,
    20,
    4,
    20,
    1105,
    1,
    46,
    98,
    99
  ];
  expect(intcode(code, 7).output[0]).toBe(999);
  expect(intcode(code, 8).output[0]).toBe(1000);
  expect(intcode(code, 9).output[0]).toBe(1001);
});
