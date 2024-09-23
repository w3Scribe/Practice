type FizzBuzz = (num: number) => (number | string)[];

const fizzBuzz: FizzBuzz = (num) => {
  const store = [];
  for (let i = 1; i <= num; i++) {
    const c1 = i % 3 == 0;
    const c2 = i % 5 == 0;
    store.push(c1 && c2 ? "fizzBuzz" : c1 ? "fizz" : c2 ? "Buzz" : i);
  }
  return store;
};

const result = fizzBuzz(100);
console.log(result.filter((res) => res == "fizz").length);
