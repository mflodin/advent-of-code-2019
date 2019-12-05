export function findPasswords(arr: Array<string>): Array<string> {
  return arr.filter(
    (x) =>
      x.match(/(\d)\1(?!\1)/) &&
      x.split("").reduce((acc, curr) => {
        if (acc === "") return "";
        if (acc > curr) return "";
        return curr;
      })
  );
}
