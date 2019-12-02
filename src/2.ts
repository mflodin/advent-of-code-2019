export function intcode(code: Array<number>): Array<number> {
  const ADD = 1;
  const MULTIPLY = 2;
  const END = 99;
  let index = 0;

  while (true) {
    const opCode = code[index];
    if (opCode === END) {
      return code;
    }
    const aPos = code[index + 1];
    const bPos = code[index + 2];
    const resPos = code[index + 3];

    if (opCode === ADD) {
      code[resPos] = code[aPos] + code[bPos];
    }

    if (opCode === MULTIPLY) {
      code[resPos] = code[aPos] * code[bPos];
    }

    index += 4;
  }
}
