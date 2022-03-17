console.log("Hey");

// Print the largest even no. from an array of integer
const largestEven = (arr) =>
     Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEven([1, 2, 3, 4, 5, 6]));
console.log(largestEven([1, 2, 3, 4, 555, 6, 7]));
console.log(largestEven([1, 2, 3, 444, 5, 6, 7]));

// Replace the first digit of the string with $ character
const replaceFirstDigit = (str) =>
     str.replace(/[0-9]/, '$');

console.log(replaceFirstDigit('bnxbh34dhbsc'));
console.log(replaceFirstDigit('jfdx23fdxbnb8fv'));

// Compare two objects to determine if the first one contains the same properties as the second one
const objA = { a: 1, b: 4, c: 1};
const objB = { a: 2, b: 2, c: 1};
const objC = { a: 2, b: 2, c: 2};

const objectsEqual = (a,b) =>
     Object.keys(a).every(key => b[key]);

console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));
console.log(objectsEqual(objB, objC));