# JavaDeveloperProgrammingBasics_Lesson-06
Objects, Arrays

* [Завдання 1](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-06/blob/master/JavaDeveloperProgrammingBasics_Lesson-06/task6_1/task6_1.js)<br>
Напишіть код, по рядку на кожну дію.
  - Створіть порожній об'єкт `user`.
  - Додайте властивість `name` зі значенням `Вася`.
  - Додайте властивість `surname` зі значенням `Пупкiн`.
  - Поміняйте значення `name` на `Сергій`.
  - Видаліть властивість `name` з об'єкта.

* [Завдання 2](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-06/blob/master/JavaDeveloperProgrammingBasics_Lesson-06/task6_2/task6_2.js)<br>
Створіть функцію `isEmpty(obj)`, яка повертає `true`, якщо в об'єкті немає властивостей і `false`, якщо хоч одна властивість є.

        let schedule = {};
        console.log(isEmpty(schedule)); // true
        
        schedule["8:30"] = "good morning!";
        console.log(isEmpty(schedule)); // false

* [Завдання 3](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-06/blob/master/JavaDeveloperProgrammingBasics_Lesson-06/task6_3/task6_3.js)<br>
Є об'єкт `salaries` iз зарплатами працiвникiв. Напишіть код, який виведе суму всіх зарплат. Якщо об'єкт порожній, то результат повинен
бути 0.

        let salaries = {
	        "Vasya" : 500,
	        "Petro" : 1200,
	        "Maria" : 800
        };

* [Завдання 4](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-06/blob/master/JavaDeveloperProgrammingBasics_Lesson-06/task6_4/task6_4.js)<br>
Створіть масив `styles` з елементами «Джаз», «Блюз». Додайте в кінець значення «Рок-н-Ролл». Замініть передостаннє значення з кінця
на «Класика». Код заміни передостаннього значення має працювати для масивів будь-якої довжини. Видаліть перше значення масиву і виведіть
його на консоль. Додайте в початок значення «Реп» і «Реггі».

* [Завдання 5](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-06/blob/master/JavaDeveloperProgrammingBasics_Lesson-06/task6_5/task6_5.js)<br>
Напишіть код для виведення на консоль випадкового значення з масиву:

        let arr = ["Яблуко", "Апельсин", "Груша", "Лимон"];

  P.S. Код для генерації випадкового цілого від `min` до `max` включно:

        let rand = min + Math.floor(Math.random() * (max + 1 - min));
