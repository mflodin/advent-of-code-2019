import { readFileSync } from "fs";
import { closestIntersection } from "./3";

function runner() {
  const [pathA, pathB] = String(readFileSync("./input/3.txt")).split("\n");

  const res = closestIntersection(pathA, pathB);

  console.log(res);
}

runner();
