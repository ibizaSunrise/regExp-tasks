let str = 'a aa aaa aaaa aaaaa';
console.log(str.replace(/(a)\1{1,}/g, '!'))