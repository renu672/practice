let arr = [1, 5, 4, 4, 5, 6];
arr.length = 2;
console.log(arr)
let sum = arr.reduce((x, y) => x + y);
console.log(sum)
let unique = new Set(arr);
console.log([...unique]);
let x = 20;
let y = 30;
[x, y] = [y, x]
console.log("x value is " + x, "y value is " + y);