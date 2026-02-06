const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [9, 8, 9];

const primaryDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
};

console.log(primaryDiagonal([arr1, arr2, arr3])); // Output: 15
