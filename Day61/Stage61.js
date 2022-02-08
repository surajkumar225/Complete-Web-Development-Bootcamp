console.log("hey");

let people = ["John", "Twit", "Steve", "Marcy", "Trash"];

// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }

// 1. ITERATING AN OBJECT
let obj = {
    name: "Surk",
    Section: "A",
    Roll: "54"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "Hey Trinity";
for (let char in myString){
    console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string


// **********For of loop***********
console.log("For of loop starts here")
people = ["John", "Twit", "Steve", "Marcy", "Trash"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}