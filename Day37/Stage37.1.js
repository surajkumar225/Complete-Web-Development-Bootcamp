console.log("Hey Trinity");
let a = document;
a = document.all      //Gives HTML collection
// a = document.body;
// a = document.forms[2];       //HTML collection
Array.from(a).forEach(function(element){        //array.form(a) makes a Array form HTML collections
console.log(element);
})
// console.log(a);