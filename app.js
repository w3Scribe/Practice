const arr = [0, 1, 2, "third", 4, 5, 6, 7, 8, "nine"];

delete arr[3];


// console.log(arr);

// arr.forEach(element => {
//   console.log(element);
// });

 arr.splice(3, 0, "addded");

console.log(arr)