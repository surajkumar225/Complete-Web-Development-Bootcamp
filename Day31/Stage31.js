console.log("Here We Go");

function greet(name, greetText="Greetings from JavaScript"){     //Here Text inside greetText used as a default value
    let name1 = "Name1";     //Local scope
    console.log(greetText + " " + name);
    console.log(name + " wants to go outside");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // console.log("Function is returned") ----- Unreachable Code
}
let name = "Surk";           //Global scope
let name1 = "Amit";
let name2 = "Joy";
let name3 = "Biplab";
let greetText1 = "Somebody Help"
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3);

let returnval = sum(10,10,5);
console.log(returnval);
// console.log(name + " wants to go outside");
// console.log(name1 + " wants to go outside");
// console.log(name2 + " wants to go outside");
// console.log(name3 + " wants to go outside");