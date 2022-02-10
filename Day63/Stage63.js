console.log("Hey")

//Sets------ Set stores unique values
const mySet = new Set();  //Initialie an empty set
console.log('The set looks like this : ' , mySet);

//Addding values to this set
mySet.add('Trinity');
mySet.add('Jonathan');
mySet.add('%$#');
mySet.add('25');
mySet.add(true);
console.log('The set looks like this now : ' , mySet);

// Constructor to initialize the set
let mySet2 = new Set([1, 56, 'Trinity', false, {a:4, b:8}]);
console.log('New set :', mySet2);

// Size of the set
console.log(mySet.size);

// Check whether set has 200 or not
console.log(mySet.has(200));           //Has means no. of values we have added in a set

// console.log('Before removal', mySet);   
console.log('Before removal', mySet.has('Jonathan'));   
mySet.delete('Jonathan');             //Remove the element from the set
// console.log('After removal', mySet);   
console.log('After removal', mySet.has('Jonathan'));   

// Iterating a set
for(let item of mySet){
    console.log('Item is :', item)
}

// mySet.forEach((item)=>{
//     console.log('Item is :', item)
// })