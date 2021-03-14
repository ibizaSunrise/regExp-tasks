//18.1
console.log(/^http:\/\//.test('http://localhost: 8000'));

//18.2
console.log(/^(http:\/\/|https:\/\/)/.test('https://app.netlify.com'));
console.log(/^http[s]?:\/\//.test('https://app.netlify.com'));

//18.3
console.log(/\.(html|php|txt)$/.test('php.js'));

//18.4
console.log(/\.(jpg|jpeg)$/.test('jpgjpeg'));
console.log(/\.(jpe?g)$/.test('jpg.jpeg'));


//18.5
console.log(/\.(jpg|jpeg|png)$/.test('jpg.png'));

//18.6
console.log(/^\d{1,12}$/.test('1000000000000000000'))

//18.7
console.log(/^\d{4}-\d{2}-\d{2}$/.test('2020-09-04'))

//18.8
console.log(/^\d{2}\.\d{2}\.\d{4}$/.test('zzzz20.09.2004'))

//18.9
console.log(/^\d{2}:\d{2}:\d{2}$/.test('zzzz20.09.2004'))

console.log(/^(([0,1][0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]$/.test('06:12:59'))

//18.10

console.log(/^[^@]+@[^@.]+\.[^@]+$/.test('test@mail.ru'))

console.log(/[-.\w]+@([\w-]+\.)+[\w-]+/g.test('test@mail.ru'))

//18.11
console.log(/([\w-]+\.)+\w+/g.test('gggg.com'))

console.log(/^(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/.test('sample.gtw-02.office4.example.com'))



