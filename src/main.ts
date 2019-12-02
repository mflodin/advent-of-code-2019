import { readFileSync } from "fs";
import { intcode } from "./2";

const code = String(readFileSync("./input/2.txt"))
  .split(",")
  .filter((x) => x)
  .map(Number);

code[1] = 12;
code[2] = 2;

const res = intcode(code);
console.log(res[0]);
