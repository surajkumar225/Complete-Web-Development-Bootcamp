console.log("Hey");

//const regax = /^t/i;
// Character sets               --We use []
let regax = /T[ahp]inity/;      //Can be a, h or p
regax = /T[a-z]inity/;          //Can be any character from a to z
regax = /T[a-m]inity/;          //can be a to m(does not matches Trinity)
regax = /T[^ahp]inity/;         //Not a, h or p
regax = /T[^ahp]ini[to]/;       //Not a,h or p | ini | Anyone from t or o  #This is case sensitive(will not able to match "Y")
regax = /T[a-zA-Z]ini[to0-9]/;  //we can have as many character sets as we want.. 

// Quantifiers                  --We use {}
regax = /Tr{3}inity/;           //'r' can occur exactly 3 times
regax = /Tr{0,3}inity/;         //'r' can occur exactly 0 to 3(0 or 1 or 2 0r 3) times

//Groupings                     --We use paranthesis for groupings()
regax = /(Trin){2}/;
regax = /(Trin){2}([0-9]r){4}/;

// const str = " What's up Trinity";
// const str = " What's up Trinit2";
// const str = "Trrrinity";
// const str = "TrinTrinity";
const str = "TrinTrin1r2r5r9r ity";

let result = regax.exec(str);
console.log("The result form exec is ", result);

if(regax.test(str)){
    console.log(`The string  ${str} matches the expression ${regax.source}`);
}
else{
    console.log(`The string  ${str} does not matches the expression ${regax.source}`);
}