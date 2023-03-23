function argwhere(arr) {
  let result = [];
  const shape = dim(arr);
  for (let i = 0; i < shape[0]; i++) {
    for (let j = 0; j < shape[1]; j++) {
      for (let k = 0; k < shape[2]; k++) {
        if (arr[i][j][k] !== 0) {
          result.push([i, j, k]);
        }
      }
    }
  }
  return result;
}

function dim(arr) {
  if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
  } else {
    return [];
  }
}
// fungsi di atas akan mengembalikan ukuran dari array yang menjadi input value.

const input = [
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
];

console.log(argwhere(input));
