interface Direction {
  x: number;
  y: number;
}

interface Point {
  x: number;
  y: number;
  a?: boolean;
  b?: boolean;
}

const DirectionMap = {
  U: { x: 0, y: 1 },
  D: { x: 0, y: -1 },
  L: { x: -1, y: 0 },
  R: { x: 1, y: 0 }
};

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

function mark(plane: Map<string, Point>, y: number, x: number, letter: string) {
  const key = JSON.stringify({ x, y });
  const position = plane.get(key);
  if (position) {
    position[letter] = true;
  } else {
    plane.set(key, { x, y, [letter]: true });
  }
}

function traversePath(
  plane: Map<string, Point>,
  path: Array<Movement>,
  letter: string
): void {
  let y = 0;
  let x = 0;
  for (let step of path) {
    let i = 0;
    let j = 0;
    while (
      i < step.length * Math.abs(step.direction.y) ||
      j < step.length * Math.abs(step.direction.x)
    ) {
      y += step.direction.y;
      x += step.direction.x;
      i += 1;
      j += 1;
      mark(plane, y, x, letter);
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

  traversePath(plane, pathA, "a");
  traversePath(plane, pathB, "b");

  const res = Array.from(plane.values())
    .filter((pos) => pos.a && pos.b)
    .map((pos) => Math.abs(pos.x) + Math.abs(pos.y))
    .reduce(smallest);

  return res;
}
