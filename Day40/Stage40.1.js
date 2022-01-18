let str = 'python';
let links = document.links;   //gives all the links of a page
console.log(links)
let href;  //variable
Array.from(links).forEach(function(element){
href = element.href;
if(href.includes(str)){
console.log(href);
}
});