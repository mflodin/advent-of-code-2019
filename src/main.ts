import { readFileSync } from "fs";
import { findPasswords, findPasswords2 } from "./4";

function runner() {
  const min = 138241;
  const max = 674034;
  var arr = Array.from(Array(max - min + 1), (e, i) => i + min).map(String);

  const res = findPasswords2(arr);

  console.log(res.length);
}

runner();
