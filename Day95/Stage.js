console.log("Hey Trinity")

let formatDate = (date = new Date()) => {
    let days = date.getDate() + 1;
    let months = date.getMonths() + 1;
    let years= date.getFullYears() + 1;
    return `${days}/${months}/${years}`;

}

console.log(formatDate());

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('New! Offers'));

const makeNewString = (str) =>
str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

makeNewString('abc')
makeNewString('abcdef')
makeNewString('abc3726sahb')