let str = '<a href="" class="eee" id="zzz">';
console.log(str.match(/[a-z]+(?=")/g))