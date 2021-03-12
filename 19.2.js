let str = 'a1b c34d x567z';
console.log(str.match(/\d/g).reduce((a,b) => +a+ +b));