console.log("Hey")

// Character classes
let regax = /\winity/;              // \w means a Word character- _ or alphabet or numbers
regax = /\w+inity/;                 // \w+ means one or more word characters
regax = /\w me/;                    // Non word character
regax = /\w+ me/;                   // \W+ means more than one Non word character
regax = /\d437/;                    // \d means digit
regax = /number \d437/; 
regax = /number \d+/;               // \d+ means more than one digit
regax = /\D437/;                    // \D means non digit
regax = /\D+437/;                   // \D+ means more than one non digit
regax = /\scome on/;                // matches whitespaces characters
regax = /\s+come on/;               // matches More than one whitespaces
regax = /\Scome on/;                // Matches non whitespaces character
regax = /\S+come on/;               // Matches more than one whitespaces characters
regax = /34335\b/;                  // Word boundary

// str = "Hey Trinity! It,s me..";  
// str = "Hey Trqqqqinity! It,s me..";               
// str = "Hey Trinity! It,s 84378474";
// str = "Hey Trinity! It,s 84763surk437437";
// str = "Hey Trinity! It,s 84763surkDawson437437     come on";
// str = "Hey Trinity! It,s 84763surkDawson437437jjjjjjjjjjcome on";
// str = "Hey Trinity34335 It's come on";

// Assertions
regax = /T(?=r)/;
regax = /T(?!n)/;
str = "Hey Trinity It's me come on Trin";


let result = regax.exec(str);
console.log("The result form exec is ", result);

if(regax.test(str)){
    console.log(`The string  ${str} matches the expression ${regax.source}`);
}
else{
    console.log(`The string  ${str} does not matches the expression ${regax.source}`);
}