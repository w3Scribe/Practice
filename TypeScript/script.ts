type ArrayChunk = (
  arr: (number | string)[],
  chunks: number
) => (string | number)[] | (number | string)[][] | null;

const arrayChunks: ArrayChunk = (arr, chunks) => {
  const arrLen: number = arr.length;
  if (arrLen <= 1 && chunks < 0) return arr;
  let result: string | number | (number | string)[][] = [];

  for (let i = 0; i < arrLen; i++) {
    if (i % chunks === 0) {
      const chunk = arr.splice(0, chunks);
      result.push(chunk);
    }
  }

  return result;
};

const result = arrayChunks([1, 2, 3, 4, 5], 2);

console.log(result);
