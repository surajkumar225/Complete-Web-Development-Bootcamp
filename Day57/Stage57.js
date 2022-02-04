console.log("hey");
// let reg = /Surk/;         //This isa regular expression literal in js
let reg = /Surk/g;           //g--Global
// let reg = /Surk/i;           //i----Insensitive

console.log(reg)
console.log(reg.source);

// let s = "Hey Surk! I'll be checking out in the morning..Surk";
let s = "Hey Surk! I'll be checking out in the morning Surk";

// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match 
let result = reg.exec(s);
console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);          //We can use multiple exec with global flag

// if(result){
// console.log(result)
// console.log(result.input)
// console.log(result.index)
// }

// 2. test() = Return true or false
let result2 = reg.test(s)
console.log(result2);           //This will only print true if the "reg" is there in the string "s"

// 3. match() = It will return an array of results or null

// let result3 = reg.match(s)       ---This is wrong!!
let result3 = s.match(reg)        //This is right!!
console.log(result3); 

// 4. search() = Returns index of first match else -1

// let result4 = reg.search(s)       ---This is wrong!!
let result4 = s.search(reg)
console.log(result4) 

// 5. replace() = Returns new replaced string with all the replacements if no global flag is given, first match will be replaced

let result5 = s.replace(reg, 'Daw')
console.log(result5)