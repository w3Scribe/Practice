type MakeArrayNonDecreasing = (nums: number[]) => { moves: number, nums: number[] }

const makeArrayNonDecreasing: MakeArrayNonDecreasing = (nums) => {
  if (!Array.isArray(nums)) {
    throw new TypeError('Input must be an array', { cause: "InvalidInput" });
  }

  if (!nums.length) {
    throw new RangeError('Input array must contain at least one element', { cause: "InvalidInput" });
  }

  let moves = 0;
  const result = nums.slice(); 

  for (let i = 1; i < result.length; i++) {
    if (result[i]! < result[i - 1]!) {
      const diff = result[i - 1]! - result[i]!;
      result[i]! += diff;
      moves += diff;
    }
  }

  return { moves, nums: result };
}

console.log(makeArrayNonDecreasing([3, 2, 5, 1, 7]));
