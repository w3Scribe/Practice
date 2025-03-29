function incArray(arr: number[]) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  if (arr.length < 1) {
    throw new Error('Array must have at least one element');
  }

  // Check for negative numbers upfront
  if (arr.some(num => num < 0)) {
    throw new Error('Array must contain only positive integers');
  }

  let incArr = Array.from(arr);
  let moves = 0;

  for (let i = 1; i < incArr.length; i++) {
    const currentElement = incArr[i - 1];
    const nextElement = incArr[i];

    if (currentElement >= nextElement) {
      const diff = currentElement - nextElement + 1; // Add 1 to ensure strictly increasing
      moves += diff;
      incArr[i] = nextElement + diff;
    }
  }

  return { moves, incArr };
}

const arr = [3, 2, 5, 1, 7];

console.log(IncArray(arr)); 