console.log("Hey")

//Destructuring in JS
let a, b;
[a,b] = [25, 22];
console.log(a,b);

[a, b, c, d, ...e] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Array destructuring
({a, b, c, ...d} = {a:46, b:67, c:98, d: 54, e:23})
console.log(a,b,c,d);

const universe = ['Nebula', 'Stars', 'Galaxies',];
[a, b, c] = universe;
console.log(a, b, c,)

// Object destructuring
Passenger = {
    name: "John wick",
    age: "41",
    gender: "Male",
    start: function(){console.log('started');}
}

const {name, age, gender} = Passenger;
console.log(name, age, gender);
start()