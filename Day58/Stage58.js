console.log("Hey")

let regax = /Trinity/;
//Some Matacharacters symbols

regax = /^Trin/;           // ^ Means expression will match if string starts with
regex = /up$/;             // $ at the end of the string means "String ends with"
regax =/T.inity/;         // . Means exactly one character
regax =/T*inity/;         // * matches any 0 or more character
regax =/Tr?ini?ty/;       // ? after character means the character is optional
ragex = /Tr\*nity/;       // \* match only * not any thing else


// let str = "I have eyes on you Trsxxxxyyyzzzzzzzinity..Hey! Trinity look up";
// let str = "I have eyes on you Trinity..Hey! Trinity look up";
// let str = "Tinty";
 let str = "Trinity look up";

let result = regax.exec(str)
console.log("The result form exec is ", result);

if(regax.test(str)){
    console.log(`The string  ${str} matches the expression ${regax.source}`);
}
else{
    console.log(`The string  ${str} does not matches the expression ${regax.source}`);
}