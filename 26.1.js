let str = 'aaa [2] bbb [3] ccc [12] ddd';

console.log(str.replace(/\d+/g, (a) => a*2));