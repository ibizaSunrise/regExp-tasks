let str = 'sss domain.ru zzz';
let res = str.match(/\s(\w+)\.([a-zA-Z]{2,3})\s/);
console.log(res);
console.log(res[1]);
console.log(res[2]);