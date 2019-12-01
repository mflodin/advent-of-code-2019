import { fuel, recursiveFuel } from "../dist/1";

test("fuel", () => {
  expect(fuel(12)).toBe(2);
  expect(fuel(14)).toBe(2);
  expect(fuel(1969)).toBe(654);
  expect(fuel(100756)).toBe(33583);
});

test("recursiveFuel", () => {
  expect(recursiveFuel(14)).toBe(2);
  expect(recursiveFuel(1969)).toBe(966);
  expect(recursiveFuel(100756)).toBe(50346);
});
