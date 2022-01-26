console.log("Hey");


setTimeout(() => {
 for(let index = 0; index < 15; index++){
  const element = index;
  console.log("This is index number" + index);
 }
}, 100);

console.log('Done printing');