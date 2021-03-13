let str = 'aaa aaa bbb bbb ccc ddd';
console.log(str.replace(/([a-z]+\s)\1/g, '!'))