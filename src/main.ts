import { readFileSync } from "fs";
import { intcode } from "./2";

function runner() {
  const code = String(readFileSync("./input/2.txt"))
    .split(",")
    .filter((x) => x)
    .map(Number);

  const GOAL = 19690720;

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      // console.log({ noun, verb });
      let tempCode = [...code];
      tempCode[1] = noun;
      tempCode[2] = verb;
      const res = intcode(tempCode);
      if (res[0] === GOAL) {
        return { noun, verb };
      }
    }
  }

  throw new Error("Goal not found");
}
const { noun, verb } = runner();

// console.log({ noun, verb });

console.log(noun * 100 + verb);
