type FizzBuzz = (num: number) => (string | number)[];

const fizzBuzz: FizzBuzz = (num) => {
  if (num < 3 || typeof num !== "number") return [];   // if num is less than 3 or not a number, return empty array

  const result: (string | number)[] = [];

  for (let i = 1; i <= num; i++) {
    const condition_one = i % 3 === 0;
    const condition_two = i % 5 === 0;

    if (condition_one && condition_two) result.push("FizzBuzz");
    else if (condition_one) result.push("Fizz");
    else if (condition_two) result.push("Buzz");
    else result.push(i);
  }

  return result;
};

const result = fizzBuzz(3);
console.log(result);
