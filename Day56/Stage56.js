console.log("Hey Trinity!");

// Pretend this is coming from a server as response
let a = "Surk";
a = undefined;
if (a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}

try {
    null.console;
    console.log("We are inside try block");
    
    functionSurk();
    
} catch(error) {
    console.log(error)
    console.log("That's strange..Isn't it?");
    console.log(error.name);
    console.log(error.message);
    
} finally {
    console.log("Finally we will run this")
}