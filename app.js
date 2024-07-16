// factorial of a numbe

function factorial(number){
  let fcSum = 1;
  for(let i=1; i<=number; i++){
    fcSum *= i;
  }
  return fcSum;
}  

console.log(factorial(5));