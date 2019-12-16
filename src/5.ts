export function intcode(
  incode: Array<number>,
  input = 0
): { code: number[]; output: number[] } {
  const code = [...incode];
  const ADD = 1;
  const MULTIPLY = 2;
  const WRITE = 3;
  const READ = 4;
  const JUMP_IF_TRUE = 5;
  const JUMP_IF_FALSE = 6;
  const LESS_THAN = 7;
  const EQUALS = 8;
  const END = 99;
  const POSITION_MODE = 0;
  let index = 0;
  let safety = 0;
  let output: Array<number> = [];
  while (safety < 1e10) {
    const instruction = String(code[index]);
    const opCode = Number(instruction.slice(-2));
    if (opCode === END) {
      return { code, output };
    }
    const modes = instruction.substring(0, instruction.length - 2);
    const aPos = code[index + 1];
    const aMode = Number(modes[modes.length - 1] ?? 0);
    const a = aMode === POSITION_MODE ? code[aPos] : aPos;
    const bPos = code[index + 2];
    const bMode = Number(modes[modes.length - 2] ?? 0);
    const b = bMode === POSITION_MODE ? code[bPos] : bPos;
    const cPos = code[index + 3];
    const cMode = Number(modes[modes.length - 3] ?? 0);
    const c = code[cPos];

    if (safety % 1e6 === 0 && safety !== 0) {
      console.log({ safety, instruction, opCode, modes, a, b, c });
    }

    if (opCode === ADD) {
      code[cPos] = a + b;
      index += 4;
    } else if (opCode === MULTIPLY) {
      code[cPos] = a * b;
      index += 4;
    } else if (opCode === WRITE) {
      code[aPos] = input;
      index += 2;
    } else if (opCode === READ) {
      output.push(a);
      index += 2;
    } else if (opCode === JUMP_IF_TRUE) {
      if (a !== 0) {
        index = b;
      } else {
        index += 3;
      }
    } else if (opCode === JUMP_IF_FALSE) {
      if (a === 0) {
        index = b;
      } else {
        index += 3;
      }
    } else if (opCode === LESS_THAN) {
      code[cPos] = a < b ? 1 : 0;
      index += 4;
    } else if (opCode === EQUALS) {
      code[cPos] = a === b ? 1 : 0;
      index += 4;
    }

    safety += 1;
  }

  throw new Error(`Reached safety ${safety} before program completed`);
}
