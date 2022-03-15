console.log("Hey");

// Extracting the first half of the string of even length
let firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('trin'));
console.log(firstHalf('trinit'));
console.log(firstHalf('trinity'));

// Concatenating two strings except their first character

let Concatenate = (s1, s2) => s1.slice(1) + s2.slice(1);

console.log(Concatenate('Pheo', 'nix'));
console.log(Concatenate('Steve', 'rogers'));
console.log(Concatenate('Anti', 'nationalist'));

// Finding which one is nearest to 100

let nearTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;

console.log(nearTo100(10, 1));
console.log(nearTo100(51, 54));
console.log(nearTo100(98, 99));
