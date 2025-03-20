function weirdAlogorithm(input: number): void {
  let current = input;
  const result = [input]
  
  while (current !== 1) {
    current = current % 2 === 0 ? current / 2 : current * 3 + 1;
    result.push(current);
  }

  console.log(result.join(' '));
}

weirdAlogorithm(3);