## Regular Expression

[Tutorial](http://code.mu/ru/javascript/book/supreme/regular/escaping-special-characters/)

### 1.  Введение в регулярные выражения в JavaScript

1.1 Дана строка:
let str = 'ahb acb aeb aeeb adcb axeb';
Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

1.2 Дана строка:
let str = 'aba aca aea abba adca abea';
Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.

1.3 Дана строка:
let str = 'aba aca aea abba adca abea';
Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.

### 2.  Операторы повторения символов в регулярках

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

### 3.  Группирующие скобки

3.1 Дана строка:
let str = 'ab abab abab abababab abea';
Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.

### 4. Экранировка спецсимволов в регулярках JavaScript

4.1 Дана строка:
let str = 'a.a aba aea';
Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.

4.2 Дана строка:
let str = '2+3 223 2223';
Напишите регулярку, которая найдет строку '2+3', не захватив остальные.

4.3 Дана строка:
let str = '23 2+3 2++3 2+++3 345 567';
Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).

4.4 Дана строка:
let str = '23 2+3 2++3 2+++3 445 677';
Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.

4.5 Дана строка:
let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.

4.6 Дана строка:
let str = '[abc] {abc} abc (abc) [abc]';
Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.

### 5. Фигурные скобки в регулярных выражения JavaScript

5.1 Дана строка:

let str = 'aa aba abba abbba abbbba abbbbba';
Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.

5.2 Дана строка:

let str = 'aa aba abba abbba abbbba abbbbba';
Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается менее 3-х раз (включительно).

5.3 Дана строка:

let str = 'aa aba abba abbba abbbba abbbbba';
Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).

### 6. Ограничение жадности в регулярках в JavaScript

6.1 Дана строка:

let str = 'aba accca azzza wwwwa';
Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме 'a').

### 7. Группы символов в регулярных выражениях JavaScript

7.1 Дана строка:

let str = 'a1a a2a a3a a4a a5a aba aca';
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.

7.2 let str = 'a1a a22a a333a a4444a a55555a aba aca';
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.

7.3 let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').

7.4 let str = 'avb a1b a2b a3b a4b a5b abb acb';
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.

7.5 let str = 'ave a#b a2b a$b a4b a5b a-b acb';
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.

7.6 let str = 'ave a#a a2a a$a a4a a5a a-a aca';
Напишите регулярку, которая заменит все пробелы на '!'.

### 8. Наборы символов в регулярных выражениях JavaScript

8.1 let str = 'aba aea aca aza axa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.

8.2 let str = 'a1a a3a a7a a9a aba';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти.

8.3 let str = 'aba aea afa aha aga';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g.

8.4 Дана строка:
let str = 'aba aea afa aha aga';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.

8.5 let str = 'aAa aea aEa aJa a3a';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.

8.6 let str = 'aAXa aeffa aGha aza ax23a a3sSa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных.

8.7 let str = 'aAXa aeffa aGha aza ax23a a3sSa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.

8.8 let str = 'aAXa aeffa aGha aza ax23a a3sSa';
Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.

## 9. Инвертирование наборов символов в регулярках

9.1 Напишите регулярку, которая найдет строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.

9.2 Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.

9.3 Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая латинская буква от 1 и более раз, буква 'z'.

9.4 Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая маленькая латинская буква и не цифра от 1 до 5 от 1 и более раз, буква 'z'.

## 10. Особенности кириллицы в регулярках JavaScript

10.1 let str = 'wйw wяw wёw wqw';
Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.

10.2 let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.

## 11. Спецсимволы внутри квадратных скобок в JavaScript
