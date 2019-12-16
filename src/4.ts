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

export function findPasswords2(arr: Array<string>): Array<string> {
  return findPasswords(
    findPasswords(arr).map((x) => x.replace(/(\d)\1\1+/g, "$1"))
  );
}
