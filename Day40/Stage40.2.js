console.log("Hey");
//LOCAL STORAGE
let impArray = ['books', 'food', 'laptop'];
//Add a key value inside local storage
localStorage.setItem('Name', 'Surk');
localStorage.setItem('Age', '20');
localStorage.setItem('I have eyes on your', JSON.stringify(impArray));

// localStorage.clear();      //Clears the entire local storage
// localStorage.removeItem('Name');    //Clear a particular key-value storage
// localStorage.removeItem('Age');
 
//Retrive an item from the local storage
let name = localStorage.getItem('name');
name = JSON.parse(localStorage.getItem('I have eyes on your'));
console.log(name);

//SESSION STORAGE
localStorage.setItem1('sName', 'sSurk');
localStorage.setItem1('sAge', 's20');
localStorage.setItem1('sI have eyes on your', JSON.stringify(impArray));