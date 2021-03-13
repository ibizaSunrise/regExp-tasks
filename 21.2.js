let str = '31.12.2025';
console.log(str.replace(/(\d\d)\.(\d\d)\.(\d{4})/g, '$3.$2.$1'))