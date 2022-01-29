console.log("hey")
let myPromise = new Promise(function(resolve, reject) {

// Pretend that this response is coming from the server
const students = [
    { name: "surk", subject: "JavaScript" },
    { name: "Daw", subject: "Java" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Jack", subject: "CPP" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()

    });

    var promise = new Promise(function(resolve, reject) { 
        const x = "geeksforgeeks"; 
        const y = "geeksforgeeks"
        if(x === y) { 
          resolve(); 
        } else { 
          reject(); 
        } });
      promise.then(function(){ 
      console.log('Success, You are a GEEK');}).catch(function () { 
      console.log('Some error has occurred');}); 