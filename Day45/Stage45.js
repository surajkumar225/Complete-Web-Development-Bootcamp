console.log("Hey")

const proto = {
 slogan: function(){
  return `This company is the best`;
 },
 changeName: function(newName){
  this.name = newName
 }
}

//This craetes Surk object
let surk = Object.create(proto);
surk.name ="Surk";
surk.role = "Programmer";
// surk.changeName("Surk2")
console.log(surk);

//This also craetes surk object
let surk1 = Object.create(proto, {
 name: {value: "Surk1" , writable: true},
 role: {value: "Programmer"},
})
console.log(surk1);

//Student Constructor
function Student(name, roll, section){
 this.name = name,
 this.roll = roll,
 this.section = section
}

//Slogan
Student.prototype.slogan = function(){
 return `This company is the best. regards, ${this.name}`;
}

let surkObj = new Student("Surk", 54, "B");
console.log(surkObj.slogan());

//Programmer
function Programmer(name, roll, section, language){
 Student.call(this, name, roll, section);
 this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Student.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Dawson = new Programmer("Dawson", 54, "A", "JavaScript");
console.log(Dawson);