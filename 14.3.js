let str = '^xx axx ^zz bkk';
console.log(str.match(/[^ \^][a-z]{2}/g))