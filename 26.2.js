let str = '123 456 789';

console.log(str.replace(/\d+/g, (a) => a
.split('')
.reverse()
.join('')));

console.log(str.replace(/(\d)(\d)(\d)/g, (a,b,c,d) => a = d+c+b));