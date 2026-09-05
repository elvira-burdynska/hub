// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// console.log(fruts);

// const names = fruts.map(frut => frut.name);
// console.log(names);
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i += 2) { console.log(i); }
// // -- 3 --
// //Замініть цикл "for" на "while"
// let i = 2;
// while (i <= 10) { console.log(i); i += 2;  }

// for (let i = 0; i < 5; i++) {
// console.log( `цифра ${i}!` );
// }
// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let num;
// do {
//     num = +prompt("Введіть число більше за 100");
// }
//     while (num !== null && num !== "" && num <= 100);

// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// const girlsAges = girls.map(girls => girls.age);
// console.log(girlsAges);

// const averageAge = girlsAges.reduce((sum, num) => sum + num, 0) / girlsAges.length;
// console.log(averageAge);