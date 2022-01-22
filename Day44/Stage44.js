console.log("hey");

//Object literals
// let obj = {
//  name: "Surk",
//  finishes: '5',
//  map: "Miramar"
// }

function obj(givenName){
  this.name = givenName
}

obj.prototype.getName = function (){
 return this.name;
}

obj.prototype.setName = function (newName){
 this.name = newName;
}

let obj2 = new obj("Dawson");
// console.log(obj2.toString());
console.log(obj2);