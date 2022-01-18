console.log("Hey");
// document.getElementById('heading').addEventListener('click', function(e){      //Event Object(e)
 // document.getElementById('heading').addEventListener('mouseover', function(e){ 
  // document.getElementById('heading').addEventListener('mousedown', function func(e){
  document.getElementById('heading').addEventListener('dblclick', function(e){     //Double click
 console.log('You have clicked the heading');
  // console.log(e)
 // location.href = '//twitter.com'; 
 let variable;
 let variable1;
 variable = e.target;      //e.target gives a element
 variable = e.target.className;
 // variable = e.target.classList;
 variable = Array.from(e.target.classList);
 // variable = e.target.id;
 variable1 = e.offsetX;
 // variable = e.offsetY;
 // variable = e.clientX;    // It tells how much far we have clicked form the browser window
 // variable = e.clientY;

console.log(variable);
console.log(variable1);
e.preventDefault();
});

// document.querySelector('.no').addEventListener('mouseenter', function(){
//  console.log('You entered no');
// });

// document.querySelector(".no").addEventListener('mouseleave', function(){
//  console.log('You exited no');
// });
  
//Dynamically color change
// document.querySelector('.container').addEventListener('mousemove', function(e){
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb($(e.offsetX), $(e.offsetX), 125)`;
//     console.log('You triggered mouse move event');
// })