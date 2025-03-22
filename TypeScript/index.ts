function IncreasingArray(input: number[]) {
  // Error Handling
  if (!Array.isArray(input) || input.length <= 1) {
    throw new Error("Input must be an array of numbers with at least two elements.");
  }

  let IncArray = [input[0]];
  let IncreasingCount = 0;

  for (let i = 0; i < input.length - 1; i++) {
    const prevElement = IncArray[i]!;
    const currentElement = input[i + 1]!;

    if (currentElement <= prevElement) {
      IncreasingCount += prevElement - currentElement;
      IncArray.push(prevElement);
    } else {
      IncArray.push(currentElement);
    }
  }

  console.log(IncreasingCount, IncArray);
}


const input = [3, 2, 5, 1, 7]
IncreasingArray(input);