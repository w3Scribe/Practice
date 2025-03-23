export function Weird(input: number): number[] {
  if (typeof input !== 'number' || isNaN(input)) {
    throw new TypeError('Input must be a valid number');
  }

  if (input <= 0) {
    throw new RangeError('Input must be a positive number greater than 0');
  }

  if (input === 1) {
    return [1];
  }

  const sequence = [input];

  while (sequence[sequence.length - 1] !== 1) {
    const current = sequence[sequence.length - 1]!;
    const next = current % 2 === 0 ? current / 2 : 3 * current + 1;
    sequence.push(next);
  }

  return sequence;
}