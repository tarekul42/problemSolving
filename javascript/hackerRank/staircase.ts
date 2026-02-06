/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
  // Write your code here

  for (let i = 0; (i = n); i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}
