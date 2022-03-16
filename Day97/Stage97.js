console.log("Hey");

// Check a given contains 2 to 5 occurances of a specified character

const countChars = (str, char) => 
     str.split('').filter(ch => ch === char).length;

const contains2To5 = (str, char) =>
     countChars(str, char) >= 2 && countChars(str, char) <= 5;

console.log(contains2To5('oy', 'o'));
console.log(contains2To5('ooy', 'o'));
console.log(contains2To5('oooy', 'o'));
console.log(contains2To5('oooooy', 'o'));
console.log(contains2To5('ooooooy', 'o'));

// Sorted in ascending order

const isAscending = (arr) => {
    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i+1] < arr[i])
        return false;
    }
    return true;
}

console.log("Sorted in ascending or not");
console.log(isAscending([1, 2, 3, 4, 5, 6]));
console.log(isAscending([1, 2, 6, 4, 3, 5]));