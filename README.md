## Regular Expression

[Tutorial](http://code.mu/ru/javascript/book/supreme/regular/escaping-special-characters/)

1.1 Дана строка:
let str = 'ahb acb aeb aeeb adcb axeb';
Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

1.2 Дана строка:
let str = 'aba aca aea abba adca abea';
Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.

1.3 Дана строка:
let str = 'aba aca aea abba adca abea';
Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.

2.1 Дана строка:
let str = 'aa aba abba abbba abca abea';
Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

2.2 Дана строка:
let str = 'aa aba abba abbba abca abea';
Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.

2.3 Дана строка:
let str = 'aa aba abba abbba abca abea';
Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.

2.4 Дана строка:
let str = 'aa aba abba abbba abca abea';
Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.
