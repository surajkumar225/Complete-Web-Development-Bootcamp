console.log("Hey");

// Iterators
function avengerIterator(values){
  let nextIndex = 0;
  //We willreturn an object
  return {
      next: function() {
          if (nextIndex < values.length){
              //We will return below object
          return {
             value: values[nextIndex++],
             done: false
          }
        }
          else {   
              //We will return below object with only done
              return {
                  done: true
              }
          }
      }
  }
}

const myArray = ['Steve', 'Tony', 'Natasha', 'James'];
console.log("My array is ", myArray);

// Using the Iterators
const avenger = avengerIterator(myArray);
console.log(avenger.next().value);
console.log(avenger.next().value);
console.log(avenger.next().value);
console.log(avenger.next().value);
console.log(avenger.next().value);