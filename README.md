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

11.1 let str = 'aba aea aca aza axa a.a a+a a*a';
Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.

11.2 let str = 'xaz x.z x3z x@z x$z xrz';
Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.

## 12. Группы символов внутри квадратных скобок JavaScript

12.1 Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.

12.1 Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.

## 13. Спецсимволы-исключения внутри квадратных скобок

13.1 let str = 'x[]z x{}z x.z x()z';
Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.

13.2 let str = '[abc] {abc} abc (abc) [abc]';
Напишите регулярку, которая найдет строки в любых скобках и заменят их на '!'.

## 14. Символ шляпки внутри квадратных скобок регулярок

14.1 let str = '^xx axx ^zz bkk @ss';
Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.

14.2 let str = '^xx axx ^zz bkk @ss';
Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.

14.3 let str = '^xx axx ^zz bkk';
Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка, а затем две латинских буквы.

## 15. Особенности дефиса внутри квадратных скобок

15.1 let str = 'xaz xBz xcz x-z x@z';
Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.
15.2 let str = 'xaz x$z x-z xcz x+z x%z x*z';
Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.

## 16. Начало и конец строки в регулярках JavaScript

16.1 let str = 'abc def xyz';
Напишите регулярку, которая найдет первую подстроку из букв.

16.2 let str = 'abc def xyz';
Напишите регулярку, которая найдет последнюю подстроку из букв.

## 17. Команда 'или' в регулярных выражениях JavaScript

17.1 let str = 'aeeea aeea aea axa axxa axxxa';
Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.

17.2 let str = 'aeeea aeea aea axa axxa axxxa';
Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.

### 18. Метод test в регулярных выражениях JavaScript

18.1 Определите, начинается ли переданная строка с http://.
18.2 Определите, начинается ли переданная строка с http:// или с https://.
18.3 Определите, что ли заканчивается переданная строка расширением txt, html или php.
18.4 Определите, что ли заканчивается переданная строка расширением jpg или jpeg.
18.5 Определите, что ли заканчивается переданная строка расширением jpg, jpeg или png.
18.6 Определите, является ли строка числом, длиной от 1 до 12 цифр.
18.7 Определите, является ли переданная строка датой в формате год-месяц-день.
18.8 Определите, является ли переданная строка датой в формате день.месяц.год.
18.9 Определите, является ли переданная строка временем в формате часы:минуты:секунды.
18.10 Определите, является ли переданная строка корректным емэйлом.
18.11  Определите, является ли переданная строка доменным именем.

## 19. Метод match с модификатором g в JavaScript

19.1 let str = 'site.ru sss site.com zzz site.net';
Получите массив доменных имен из этой строки.

19.2 let str = 'a1b c34d x567z';
Найдите сумму всех чисел этой строки.

## 20. Карманы в методе match в регулярках JavaScript

20.1 let str = 'sss domain.ru zzz';
Найдите этот домен и положите его имя в первый карман, а зону - во второй.

20.2 let str = '31.12.2025';
Положите день в первый карман, месяц - во второй, а год - в третий.

## 21. Карманы в методе replace в регулярках JavaScript

21.1 let str = '12 34 56 78';
Поменяйте местами цифры во всех двухзначных числах.
21.2 let str = '31.12.2025';
Преобразуйте эту дату в '2025.12.31'.

### 22. Карманы по умолчанию в методе replace в JavaScript

22.1 let str = 'a1b2c3';
Напишите регулярку, которая рядом с каждой цифрой напишет такую же.
22.2 let str = 'sss site.ru zzz site.com kkk';
Замените домены на ссылки вида '<a href="http://site.ru">site.ru</a>'.

### 23. Карманы в самой регулярке в JavaScript

23.1 let str = 'aaa bbb ccc xyz';
Найдите все подстроки, в которых есть три одинаковые буквы подряд.

23.2 let str = 'a aa aaa aaaa aaaaa';
Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.

23.3 let str = 'aaa aaa bbb bbb ccc ddd';
Найдите все подстроки, в которых есть два одинаковых слова подряд.

### 24. Несохраняющие скобки в регулярках JavaScript (?: )

### 25. Позитивный и негативный просмотр в JavaScript

25.1 Дана строка, содержащая имена функций:
let str = 'func1() func2() func3()';
Получите массив имен функций из строки.

25.2 let str = '\<a href="" class="eee" id="zzz"\>';
Получите массив имен атрибутов этого тега.
  
 ### 26. Коллбэк в методе replace в регулярках JavaScript
  
  26.1 let str = 'aaa [2] bbb [3] ccc [12] ddd';
Найдите числа, стоящие в скобках и увеличьте их в два раза. То есть из нашей строки должна получится следующая:
'aaa [6] bbb [9] ccc [24] ddd'
  
  26.2 let str = '123 456 789';
Найдите все числа и переверните их цифры в обратном порядке. То есть из нашей строки должна получится следующая:
'321 654 789'
  
  26.3 let str = '31.12.2025 30.11.2024 29.10.2023';
Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка:
'2025-12-31 2024-11-30 2023-10-29'
