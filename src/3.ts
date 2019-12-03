interface Direction {
  x: number;
  y: number;
}

interface Point {
  x: number;
  y: number;
  A?: boolean;
  B?: boolean;
  stepsA?: number;
  stepsB?: number;
}

const DirectionMap = {
  U: { x: 0, y: 1 },
  D: { x: 0, y: -1 },
  L: { x: -1, y: 0 },
  R: { x: 1, y: 0 }
};

interface Steps {
  stepsA?: number;
  stepsB?: number;
}

interface Movement {
  direction: Direction;
  length: number;
}
function parsePath(path: string): Array<Movement> {
  const result = path.split(",").map((m) => {
    return { direction: DirectionMap[m[0]], length: Number(m.substring(1)) };
  });
  return result;
}

function mark(
  plane: Map<string, Point>,
  y: number,
  x: number,
  letter: string,
  steps: Steps
) {
  const key = JSON.stringify({ x, y });
  const position = plane.get(key);
  if (position) {
    Object.assign(position, { [letter]: true }, steps);
  } else {
    plane.set(key, { x, y, [letter]: true, ...steps });
  }
}

function traversePath(
  plane: Map<string, Point>,
  path: Array<Movement>,
  letter: string
): void {
  let y = 0;
  let x = 0;
  let steps = 0;
  for (let step of path) {
    let i = 0;
    let j = 0;
    while (
      i < step.length * Math.abs(step.direction.y) ||
      j < step.length * Math.abs(step.direction.x)
    ) {
      steps += 1;
      y += step.direction.y;
      x += step.direction.x;
      i += 1;
      j += 1;
      mark(plane, y, x, letter, { ["steps" + letter]: steps });
    }
  }
}

function smallest(acc: number, curr: number): number {
  if (curr < acc) {
    return curr;
  }
  return acc;
}

export function closestIntersection(
  pathStringA: string,
  pathStringB: string
): number {
  const pathA = parsePath(pathStringA);
  const pathB = parsePath(pathStringB);

  const plane: Map<string, Point> = new Map<string, Point>();

  traversePath(plane, pathA, "A");
  traversePath(plane, pathB, "B");

  const res = Array.from(plane.values())
    .filter((pos) => pos.A && pos.B)
    .map((pos) => Math.abs(pos.x) + Math.abs(pos.y))
    .reduce(smallest);

  return res;
}

export function leastSteps(pathStringA: string, pathStringB: string): number {
  const pathA = parsePath(pathStringA);
  const pathB = parsePath(pathStringB);

  const plane: Map<string, Point> = new Map<string, Point>();

  traversePath(plane, pathA, "A");
  traversePath(plane, pathB, "B");

  const res = Array.from(plane.values())
    .filter((pos) => pos.A && pos.B)
    .map((pos) => (pos.stepsA || 0) + (pos.stepsB || 0))
    .reduce(smallest);

  // console.log(res);
  return res;
}
