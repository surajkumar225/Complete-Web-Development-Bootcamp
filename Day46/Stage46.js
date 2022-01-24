console.log("hey")
class Employee {
 constructor(givenName, givenExperience, givenDivision) {
  this.name = givenName;
  this.experience = givenExperience;
  this.division = givenDivision;
 }

  slogan(){
   return `I am ${this.name} and this company is the best`;
  }

  joiningYear(){
   return 2022 - this.experience;
  }

  static add(a,b){
   return a+b;
  }
 }
 surk = new Employee("Surk", 5, "Division");
   console.log(surk.joiningYear);
   console.log(surk);
   console.log(Employee.add(10,5));

//Inheritance
 class Programmer extends Employee{
   constructor(givenName, givenExperience, givenDivision, language, github){
    super(givenName, givenExperience, givenDivision); 
    this.language = language;
    this.github = github;      //It is the constructor of previous class
   }

   favoriteLanguage(){
    if(this.language == 'Java'){
     return 'Java'
    }
    else{
     return 'JavaScript';
    }
   }

   static multiply(a,b){
    return a*b;
   }
  }

dawson = new Programmer("Daw", 3, "Lofi", "CPP", "Daw225")
console.log(dawson);
console.log(dawson.favoriteLanguage())
console.log(Programmer.multiply(5*5));