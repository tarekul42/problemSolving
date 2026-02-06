/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  // Write your code here
  const arrayLength = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (const numbers of arr) {
    if (numbers > 0) {
      positiveCount++;
    } else if (numbers < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }
  const positiveRatio = (positiveCount / arrayLength).toFixed(6);
  const negativeRatio = (negativeCount / arrayLength).toFixed(6);
  const zeroRatio = (zeroCount / arrayLength).toFixed(6);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}
