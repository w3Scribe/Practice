const reverseNumber = (num : number) : number => {
  if(num.toString().length === 1) return num;
  const reverNumberStr = num.toString().split("").reverse().join("");
  return Math.sign(num) * parseInt(reverNumberStr)      
}
