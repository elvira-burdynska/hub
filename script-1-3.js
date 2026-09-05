// let num = 2;
// if (num % 2 === 0) {
    
//     console.log(num);
// }
//     else  {
//         console.log("Not an even number");
//     }

// =============================
// ЗАДАЧА 2
// =============================

// Є дві змінні:
// const a = 15;
// const b = 27;

// // Виведи в консоль більше число.
// console.log(Math.max(a, b));

// =============================
// ЗАДАЧА 3
// =============================

// За допомогою циклу for
// порахуй суму всіх чисел від 1 до 10.
//
// let b = 0;
// for (let i = 1; i <= 10; i++) {
//     b += i;
// }
// console.log(b);
// Очікуваний результат:
// 55


// =============================
// ЗАДАЧА 4
// =============================

// За допомогою циклу for
// виведи всі парні числа від 2 до 20.
//
// Очікуваний результат:
// 2
// 4
// 6
// ...
// 20
// let i = 2;
// for (s=1; s<=20; s++) {
// i=i+s;
//     if(s % 2 === 0)  console.log(s);
// }


// =============================
// ЗАДАЧА 5
// =============================

// Дано масив:

// const fruits = ["apple", "banana", "orange", "kiwi"];

// // Виведи кількість елементів у масиві.
// //
// console.log(fruits.length);
// Очікуваний результат:
// 4


// =============================
// ЗАДАЧА 6
// =============================

// Дано масив:

// const numbers = [5, 10, 15, 20];
// let b = 0;
// // За допомогою циклу
// // знайди суму всіх чисел масиву.
// //
// for (let i = 0; i < numbers.length; i++) {
//     b += numbers[i];
// }
// console.log(b);
// Очікуваний результат:
// 50

// const fruits = ["apple", "banana", "orange"];
// let i = 0;
// for (; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// const numbers = [3, 7, 2, 9];

// for (i=0; i<numbers.length; i++) {
// console.log("Індекс:", i, "Значення:", numbers[i]);
// // }

// const numbers = [10, 20, 30, 40, 50];
// console.log((numbers[0]) + (numbers[numbers.length-1]));
// const numbers = [2, 4, 6, 8];
// numbers[0]=100;
// console.log(numbers[0]);
// console.log(numbers);

// const letters = ["a", "b", "c", "d"];
// for (i=0; i<letters.length; i++) {
// console.log("index number", i, letters[i]);
// }

// const numbers = [11, 22, 33, 44];

// let i = numbers.length - 1;
// while (i >= 0) {
//     console.log(i);
//      i--;
// }

// =============================
// ЗАДАЧА 7
// =============================

// Дано масив:

// const numbers2 = [7, 15, 2, 30, 18];

// // Знайди найбільше число в масиві.
// //

// // Очікуваний результат:
// // 30
// //
// // Підказка:
// // створи змінну max
// // і порівнюй кожен елемент масиву з нею.

// let max=numbers2[0];
// let i = 1;
// while (i < numbers2.length) {
//     if (numbers2[i] > max) {
//         max=numbers2[i]
//     }
//     i++;
// }

// console.log(max);

// const numbers = [12, 5, 8, 1, 20];

// let min=numbers[0]
// let i = 1;

// while (i<numbers.length) {
// if (numbers[i]<min) {
// min=numbers[i]}
// i++
// }
// console.log(min);
// const numbers = [5, 10, 15, 20];
// let sum=0;
// for (i = 0; i < numbers.length; i++) {
// sum = sum + (numbers[i]);

// }
// console.log(sum);

// const numbers = [2, 7, 4, 9, 12, 15, 20];
// let amount=0;
// let k=0;

// for (i=0; i<numbers.length; i++) {
// amount = numbers[i];
// if (amount % 2 ===0) {
// k++
// }
// }
// console.log(k)

// const numbers = [3, 8, 15, 22, 19, 30];

// let i=0;
// newarray = [];
// max=0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
        
//         newarray.push(numbers[i]);
//     }

//     i++;
// }
// console.log(newarray);
// for (let k=0; k < newarray.length; k++) {
// if (max < newarray[k]) {
// max=newarray[k];}
// }
// console.log(max);

// =============================
// ЗАДАЧА 8
// =============================

// Дано масив оцінок:

const grades = [8, 10, 12, 9, 11];

// Знайди середню оцінку.
//
// Формула:
// // сума всіх чисел / кількість елементів
// let sum=0;

// for (let i=0; i<grades.length; i++) {
// sum=sum + grades[i];
// }
// console.log(sum / grades.length);
//
// Очікуваний результат:
// 10


// =============================
// ЗАДАЧА 9
// =============================

// Дано масив:

const fruits2 = ["apple", "banana", "kiwi"];

// Створи новий масив,
// в якому всі слова будуть написані великими літерами.
//
// let k = [];
// for (let i = 0; i < fruits2.length; i++) {
//     k.push(fruits2[i].toUpperCase());
// }
// console.log(k);
// Очікуваний результат:
//
// ["APPLE", "BANANA", "KIWI"]
//
// Підказки:
// toUpperCase()
// push()


// =============================
// ЗАДАЧА 10
// =============================

// Дано кошик товарів:

const cart = [
  { name: "Milk", price: 50 },
  { name: "Bread", price: 25 },
  { name: "Apple", price: 30 }
];

// Потрібно:
//
// 1. Вивести всі назви товарів.

// for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i].name);
// }
// 2. Порахувати загальну суму покупок.


// let sum=0;
// let k;
// for (let i=0; i<cart.length; i++) {
//     sum = sum + cart[i].price;
  
// if (sum>=100) {
// k="Безкоштовна доставка"

// } else {k="Платна доставка"}
// }
// console.log(sum, k)

// 3. Якщо сума більша за 100,
//    вивести:
//    "Безкоштовна доставка"
//
//    інакше:
//    "Платна доставка"
//
// Очікуваний результат:
//
// Milk
// Bread
// Apple
//
// 105
// Безкоштовна доставка


// const people = [
//     { name: "Іван", city: "Київ" },
//     { name: "Марія", city: "Львів" },
//     { name: "Олег", city: "Одеса" }
// ];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }

// const people = [
//     { name: "Іван", age: 40 },
//     { name: "Марія", age: 22 },
//     { name: "Олег", age: 35 }
// ];


// let k = [];


// for (let i = 0; i < people.length; i++) {
// k.push(people[i].age);
// }
// console.log(k)
// let min = k[0];
// for (let i=0; i < k.length; i++)
// {
    
//     if (k[i] < min) {
// min=k[i]}
// }

// console.log(min);

// =====================================
// ЗАДАЧА 1
// =====================================

// Дано масив об'єктів:

const people = [
    { name: "Іван", age: 40 },
    { name: "Марія", age: 22 },
    { name: "Олег", age: 35 }
];

// Знайти найбільший вік.
//
// Очікуваний результат:
// 40
// let k = people[0].age;
// for (let i = 0; i <people.length; i++) {

// if (k < people[i].age) {
//     k = people[i].age; }

// }
// console.log(k);
// =====================================
// ЗАДАЧА 2
// =====================================

// Дано масив об'єктів:

const people2 = [
    { name: "Іван", age: 40 },
    { name: "Марія", age: 22 },
    { name: "Олег", age: 35 }
];

// let oldestPerson = people2[0];

// for (let i = 1; i < people2.length; i++) {
//     if (oldestPerson.age < people2[i].age) {
//         oldestPerson = people2[i];
//     }
// }

// console.log(oldestPerson.name); // "Іван"
// Знайти ім'я найстаршої людини.
//
// Очікуваний результат:
// "Іван"



// =====================================
// ЗАДАЧА 3
// =====================================

// Дано масив об'єктів:

const workers = [
    { name: "Іван", salary: 1000 },
    { name: "Марія", salary: 2500 },
    { name: "Олег", salary: 1800 }
];

// let biggestSalary = workers[0].salary;
// for (let i=0; i < workers.length; i++) {
// if (biggestSalary < workers[i].salary) {
// biggestSalary = workers[i].salary;
// }
// }
// console.log(biggestSalary);
// Знайти найбільшу зарплату.
//
// Очікуваний результат:
// 2500


// =====================================
// ЗАДАЧА 4
// =====================================

// Дано масив об'єктів:

const workers2 = [
    { name: "Іван", salary: 1000 },
    { name: "Марія", salary: 2500 },
    { name: "Олег", salary: 1800 }
];

// Знайти ім'я працівника з найбільшою зарплатою.
// //
// let biggestSalary = workers2[0].salary;
// let personPrice = workers2[0].name;
// for (let i=0; i < workers2.length; i++) {
// if (biggestSalary < workers2[i].salary) {
// biggestSalary = workers2[i].salary;
// personPrice = workers2[i].name;
// }
// }
// console.log(personPrice);
// Очікуваний результат:
// "Марія"


// =====================================
// ЗАДАЧА 5
// =====================================

// Дано масив об'єктів:

const girls = [
    { name: "Оля", age: 23 },
    { name: "Аня", age: 29 },
    { name: "Юля", age: 10 },
    { name: "Катя", age: 20 }
];

// Порахувати суму всіх віків.
//

// let sumOfAges=0;
// for (let i=0; i<girls.length; i++) {
// sumOfAges = sumOfAges + girls[i].age;
// }
// console.log(sumOfAges);
// Очікуваний результат:
// 82


// =====================================
// ЗАДАЧА 6
// =====================================

// Дано масив об'єктів:

const girls2 = [
    { name: "Оля", age: 23 },
    { name: "Аня", age: 29 },
    { name: "Юля", age: 10 },
    { name: "Катя", age: 20 }
];

// Знайти середній вік.
//
// let sumOfAges=0;
// for (let i=0; i<girls2.length; i++) {
// sumOfAges = sumOfAges + girls2[i].age;
// }
// console.log(sumOfAges / girls2.length);



// Очікуваний результат:
// 20.5


// =====================================
// ЗАДАЧА 7
// =====================================

// Дано масив об'єктів:

const users = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 20 },
    { name: "Олег", age: 16 },
    { name: "Катя", age: 25 }
];

// Створити новий масив,
// куди потраплять лише повнолітні користувачі.
//
// let newUsers=[];
// let adult=users[0].age;
// for (i = 0; i < users.length; i++) {

//     if (users[i].age >= 18) {
//         adult = users[i].age;
//         newUsers.push(users[i]);
//     }
// }
// console.log(newUsers);
// Очікуваний результат:
//
// [
//   { name: "Марія", age: 20 },
//   { name: "Катя", age: 25 }
// ]


// =====================================
// ЗАДАЧА 8
// =====================================

// Дано масив об'єктів:

const users2 = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 20 },
    { name: "Олег", age: 16 },
    { name: "Катя", age: 25 }
];

// Створити новий масив,
// який містить лише імена користувачів.
//
// Очікуваний результат:
// //
// let newUsers = [];

// for (i=0; i < users.length; i++) {
// newUsers.push(users[i].name);
// }
// console.log(newUsers);
// ["Іван", "Марія", "Олег", "Катя"]


// =====================================
// ЗАДАЧА 9
// =====================================

// Дано масив об'єктів:

const products = [
    { name: "Молоко", price: 45 },
    { name: "Хліб", price: 30 },
    { name: "Сир", price: 120 }
];

// Порахувати загальну вартість усіх товарів.
// //
// let Prices=[];

// for (i=0; i < products.length; i++) {
// Prices.push(products[i].price);
// }
// console.log(Prices);

// let sumOfPrices=0;
// for (i=0; i < Prices.length; i++) {
// sumOfPrices+=Prices[i];
// }
// console.log(sumOfPrices);
// Очікуваний результат:
// 195


// =====================================
// ЗАДАЧА 10
// =====================================

// Дано масив об'єктів:

const products2 = [
    { name: "Молоко", price: 45 },
    { name: "Хліб", price: 30 },
    { name: "Сир", price: 120 }
];

// Знайти назву найдорожчого товару.
//
let p=products2[0].price;
let highest;
for (i=0; i < products2.length; i++) {
if (p < products2[i].price) {
highest = products2[i].name;
}
p++
}
console.log(highest);
// Очікуваний результат:
// "Сир"