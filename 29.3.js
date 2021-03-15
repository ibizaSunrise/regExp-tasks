let str = 'aaa aaa aaa bbb aaa ccc ddd ddd';
/*не решает проблему если дубликаты вразнобой
не разобралась как искать все вхождения*/
console.log(str.replace(/\b(\w+)\b(?:\s+\1\b)+/g, "$1"))


//сделала бы так
console.log(Array.from(new Set(str.split(" "))))