type FizzBuzz = (n: number) => (string | number)[] | string;

const fizzBuzz: FizzBuzz = (n) => {
  if (n < 3 || typeof n !== "number") return "Invalid input";
  const result: (number | string)[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) result.push("FizzBuzz");
    else if (i % 3 == 0) result.push("Fizz");
    else if (i % 5 == 0) result.push("Buzz");
    else result.push(i);
  }

  return result;
};

console.log(fizzBuzz(1)); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
