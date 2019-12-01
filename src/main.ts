import { readFileSync } from "fs";
import { sum } from "mathjs";
import { fuel } from "./1";

// function sum(acc, curr) {
//   return acc + curr;
// }

(async () => {
  const masses = String(await readFileSync("./input/1.txt"))
    .split("\n")
    .filter((x) => x)
    .map(Number);
  console.log(masses);
  console.log(masses.map(fuel));
  console.log(sum(masses.map(fuel)));
})();
