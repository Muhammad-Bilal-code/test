// import myName from "./file1.js";

// import * as bundle from "./file1.js";
// import _sayBy from "./file1.js";

// import sayBy from "./file2.js";

/**************let & const start****************/

// let myName = "Bilal";
// myName = "Muhammad Bilal";
// console.log(myName);

// const yourName = "Hussain";
// yourName = "Muhammad Hussain";

/**************let & const end****************/

/****************Arrow function start******************/

// const _sayHello = (name) => name;
// console.log(_sayHello("Hello Bilal"));

// const _addition = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(_addition(5, 5));

/****************Arrow function end******************/

/***************export & import start***************/
// console.log(myName);

// console.log(bundle._sayHello("Hello Bilal"));
// console.log(_sayBy("By Bilal"));

// console.log(sayBy("By Bilal"));
/***************export & import end***************/

/*********************class & object Start********************/

// class Customer {
//   constructor(n, g, a) {
//     this.name = n;
//     this.gender = g;
//     this.age = a;
//   }

//   eat() {
//     console.log(
//       this.name +
//         " " +
//         "eating, " +
//         this.name +
//         " is " +
//         this.age +
//         " years old"
//     );
//   }
// }

// class GuestCustomer extends Customer {
//   run() {
//     console.log(this.name + " is runing");
//   }
// }

// let customer1 = new Customer("Bilal", "Male", 25);
// console.log(customer1);

// console.log(customer1.name);
// console.log(customer1.gender);
// console.log(customer1.age);
// customer1.eat();

// let gcustomer1 = new GuestCustomer("Hussian", "", 22);

// gcustomer1.run();
// gcustomer1.eat();
// console.log(gcustomer1.age);

/*********************class & object End********************/

/************************Spread & rest Operators Start************************/

/****spread operator use in array & object*****/
// let arr1 = ["audi", "honda", "suzuki"];
// console.log(arr1);

// let arr2 = ["toyota", ...arr1, "kia", ...arr1];
// console.log(arr2);

// let obj1 = {
//   name: "bilal",
//   age: 25,
// };
// console.log(obj1);

// let obj2 = {
//   // ...obj1,
//   name1: "hussain",
//   age1: 22,
//   ...obj1,
// };
// console.log(obj2);

/*****rest operator use in function****/

// function handleRestOperator(...all) {
//   console.log(all);
//   console.log(all[0]);
// }

// handleRestOperator("bilal", 25);

/************************Spread & rest Operators End************************/

/****************************Array Destructuring Start*****************************/
// let arr1 = ["audi", "honda", "suzuki"];

// let [car1, , car2] = arr1;
// console.log(car2);

/****************************Array Destructuring End*****************************/

/****************************Object Destructuring Start*****************************/
// let person = {
//   name: "bilal",
//   age: 25,
// };

// console.log(person.age);

// let { name } = person;
// console.log(age);
// console.log(name);
/****************************Object Destructuring End*****************************/

/**************refrence(array,object) and primitive(string,num) data types Start**************/

/*****primitive*****/
// let num1 = 100;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num2 = 50;
// console.log(num2);
// console.log(num1);

/*********reference*********/

// let personn = {
//   name: "Bilal",
// };
// let personn1 = personn;

// console.log(personn);
// console.log(personn1);

// personn1.name = "Hussian";

// console.log(personn1);
// console.log(personn);

/***********solve reference by spread operator***********/

// let person = {
//   name: "bilal",
// };

// let person1 = {
//   ...person,
// };

// console.log(person);
// console.log(person1);

// person1.name = "hussain";

// console.log(person1);
// console.log(person);

/**************refrence(array,object) and primitive(string,num) data types End**************/

/*******************Map & Filter Function Start*******************/

/********map without arrow function********/
// let arr = [2, 5, 7, 8, 9, 12, 13];
// let arr1 = arr.map(function (x) {
//   return x * 2;
// });
// console.log(arr1);

/***********map with arrow function***********/
// let arr = [2, 4, 6, 8];
// let arr1 = arr.map((x) => x * 2);
// console.log(arr1);

/*********filter without arrow function********/
// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let arr1 = arr.filter(function (x) {
//   if (x % 2 == 0) {
//     return x;
//   }
// });
// console.log(arr1);

/************filter with arrow function**********/
// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let arr1 = arr.filter((x) => x % 2 == 0);
// console.log(arr1);
/*******************Map & Filter Function End*******************/
