
type MakeArrayNonDecreasing = (nums: number[]) => { moves: number, nums: number[] }

const makeArrayNonDecreasing: MakeArrayNonDecreasing = (nums) => {
  if (!Array.isArray(nums)) {
    throw new TypeError('Input must be an array', { cause: "InvalidInput" });
  }

  if (!nums.length) {
    throw new RangeError('Input array must contain at least one element', { cause: "InvalidInput" });
  }

  let Moves = 0;
  let Result: number[] = [nums[0]!];

  for (let i = 1; i < nums.length; i++) {
    const prevElement = Result[i - 1]!;
    const currentElement = nums[i]!
    const diff = prevElement - currentElement

    if (currentElement < prevElement) {
      Result.push(currentElement + diff);
      Moves += diff
    } else {
      Result.push(currentElement);
    }
  }

  return { moves: Moves, nums: Result }
}


console.log(makeArrayNonDecreasing([3, 2, 5, 1, 7] ))