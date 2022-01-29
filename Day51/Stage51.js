console.log("hey")

//Pretend that this response is coming form the server
const students = [
    {name: "Surk", language: "JavaScript"},
    {name: "Daw", language: "Java"}
]

function enrollStudent(student, callback){
    setTimeout(function(){
         students.push(student);        //This will run in background after 3sec---setTimeout
         console .log("Students have been entrolled") ;  
         callback();        
    }, 1000);
}

function getStudents(){
    setTimeout(function(){
      let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console .log("Students have been fetched") ;
   }, 4000);
}

let newStudent = {name:"Jack", language: "CPP"}
enrollStudent(newStudent, getStudents);
// getStudents();