export function fuel(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

export function recursiveFuel(mass: number): number {
  let f = Math.floor(mass / 3) - 2;
  if (f <= 0) {
    return 0;
  }

  return f + recursiveFuel(f);
}
