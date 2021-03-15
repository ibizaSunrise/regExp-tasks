let str = '31.12.2025 30.11.2024 29.10.2023';

console.log(str.replace(/(\d+)\.(\d+)\.(\d+)/g, (a,b,c,d) => a=`${d}-${c}-${b}`));