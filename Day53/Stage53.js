console.log("Hey");

async function surk(){                   //Async returns a Promise
    console.log("Inside surk function");
    const response = await fetch('https://api.github.com/users');         //Await -- Go back
    console.log("Before response");
    const users = await response.json();      //response.json also returns a promise
    console.log("users resolved");
    return users;
    // return "surk";
}

console.log("Before calling surk");
let a = surk();

console.log("After calling surk");
console.log(a);

a.then(data => console.log(data))
console.log("Last line of this JS file");