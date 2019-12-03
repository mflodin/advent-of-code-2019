import { readFileSync } from "fs";
import { leastSteps } from "./3";

function runner() {
  const [pathA, pathB] = String(readFileSync("./input/3.txt")).split("\n");

  const res = leastSteps(pathA, pathB);

  console.log(res);
}

runner();
