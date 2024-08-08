const arr = [1, 2, 3, 3, 34, 5, 6, 7, 6, 5, 7, 8, 9];

const result = arr.reduce(
  (pre, curr) => (pre.includes(curr) ? pre : [...pre, curr]),
  []
);

console.log(result);
