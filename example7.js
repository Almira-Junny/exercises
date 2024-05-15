const matrix = [
  [1, 2],
  [3, 4],
];

const rowMatrix = (row) => {
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
};

for (let i = 0; i < matrix.length; i++) {
  rowMatrix(matrix[i]);
}
