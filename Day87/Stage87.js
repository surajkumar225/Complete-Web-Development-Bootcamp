console.log("Hey");
let isEqualTo100 = (a,b) => a === 100 || b === 100;
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));
console.log(isEqualTo100(10,0));
console.log(isEqualTo100(0,10));

getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('Stage87.html'));
console.log(getFileExtension('Stage87.js'));

moveCharsForward = (str) => str.split('')
                               .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
                               .join('');

console.log(moveCharsForward('c'));
console.log(moveCharsForward('p'));
console.log(moveCharsForward('k'));

