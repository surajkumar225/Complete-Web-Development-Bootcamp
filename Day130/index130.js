console.log("Hey there")

const uniqueChars = (str) => 
    str.split(''). filter(
        (item, index, arr) => 
        arr.slice(index + 1). indexOf(item) === -1
    );

console.log(uniqueChars('bbbhhhhaaaggg'));
console.log(uniqueChars('fffiiinnnddd mmmee'));

const NonRepeat = (str) => 
   str.split('')
   .filter((item, index, arr) => 
      arr.filter(arrItem => arrItem === item).length === 1
   );

console.log(NonRepeat('hhhheeeeeollllleeee'));
console.log(NonRepeat('rrrun'));