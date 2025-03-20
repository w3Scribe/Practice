function MissingNumber(input: number[]): void {
  const N = input.length;
  const Sum = N * (N + 1) / 2;
  const SumOfInput = input.reduce((acc, num) => acc + num, 0);
  const MissingNumber = Sum - SumOfInput;
  console.log(MissingNumber);
}

MissingNumber([0, 1, 2, 4, 5, 6, 7, 8, 9, 10]); // Output: 10

