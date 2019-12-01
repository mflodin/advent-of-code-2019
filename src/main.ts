import { readFileSync } from "fs";
import { sum } from "mathjs";
import { fuel, recursiveFuel } from "./1";

const masses = String(readFileSync("./input/1.txt"))
  .split("\n")
  .filter((x) => x)
  .map(Number);
// console.log(masses);
// console.log(masses.map(recursiveFuel));
console.log(sum(masses.map(recursiveFuel)));
