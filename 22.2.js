let str = 'sss site.ru zzz site.com kkk';
console.log(str.replace(/([a-z]+\.[a-z]{2,3})/g, '<a href="http://$&">$&</a>'))