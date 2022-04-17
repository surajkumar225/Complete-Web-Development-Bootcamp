console.log("Hey")

const countLetters = (
    str, letters = ['a', 'e', 'i', 'o', 'u']) => 
    str.split('')
       .filter(s => letters.indexOf(s) > -1)
       .length;
    
    
console.log(countLetters('abcde'));
console.log(countLetters('abcde', ['c']));

const countCoins = (money, coins = [54, 30, 23 ,22 , 6]) => {
    const totalCoins = [];
    for(let i=0; i<coins.length; i+=1){
        const thisCoinNum = Math.floor(money / coins[i]);
        for(let a=0; a< thisCoinNum; a+=1) {
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins;
}

console.log(countCoins(50));
