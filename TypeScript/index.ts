const number = 1_000_000
const result = Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number)
console.log(number, result)