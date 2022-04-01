// const fs = require("fs");
// let text = fs.readFileSync("surk.txt", "utf-8");

// text = text.replace("Wanna", "Trase");

// console.log("The content of the file is");
// console.log(text);

// console.log("Creating a new file");
// fs.writeFileSync("trase.txt", text);


const fs = require("fs");
fs.readFileSync("surk.txt", "utf-8", (err, data)=> {
    console.log(data);
});
console.log("This is a message");