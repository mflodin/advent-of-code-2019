import { readFileSync } from "fs";
import { intcode } from "./5";

function runner() {
  var arr = String(readFileSync("./input/5.txt"))
    .split(",")
    .map(Number);

  const res = intcode(arr, 1);

  console.log(res.output);
}

runner();
