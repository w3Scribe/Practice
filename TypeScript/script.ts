const reverseNumber = (num: number): number => {
  const numStr = num.toString();
  if (numStr.length === 1) return num;
  return Math.sign(num) * parseInt(numStr.split("").reverse().join(""));
};
