let str = 'aaa bbb ccc xyz';
console.log(str.replace(/([a-z])\1{2}/g, '!'))