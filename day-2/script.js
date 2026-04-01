//QUESTION: 1
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log("var", i);
//   }, 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log("let:", i);
//   }, 1000);
// }

// for (let i = 0; i < 3; i++) {
//   const num = i;
//   setTimeout(() => {
//     console.log("const:", num);
//   }, 1000);
// }

//QUESTION: 2
// function add() {
// let a = 2;
//   if (true) {
//     var a = 2;
//     let b = 3;
//   }

//   console.log(a);
//   console.log(b);
// }

// console.log(a);
// add();

//QUESTION: 3
// var a = 4;
// var a = 12;
// console.log(a);
// console.log(a);

// let b = 3;
// let b = 5;

// const c = 6;
// const c = 4;

//QUESTION: 4
// const user = {
//   userName: "parvez",
//   vill: "basirhat",
// };

// changing property
// user.userName = "rohit";
// console.log(user.userName);

// adding new property
// user.sub = "math";
// console.log(user);

// trying to reassign the object
// user = {
//   userName: "hoko",
//   vill: "dandirhat",
// };

// console.log(user);

//QUESTION: 5
// function add() {
//   console.log(a);
//   var a = 5;

//   console.log(b);
//   let b = 9;
// }

// add();

//QUESTION: 6
// function tdzExample() {
//   // x is hoisted here but not initialized (TDZ start)
//   console.log(x); // still in TDZ => error
//   let x = 5; // TDZ ends here.
// }

// tdzExample();

//QUESTION: 7
// let a = 10;
// {
//   let a = 20;
//   console.log("Inside Block:", a);
// }

// console.log("outer:", a);

// var a = 10;
// {
//   var a = 20;
//   console.log("Inside Block:", a);
// }

// console.log("outside Block:", a);

//QUESTION: 8
// add(5, 6);
// function add(a, b) {
//   console.log(a + b);
// }

// hello(2, 3);
// var hello = (a, b) => {
//   console.log(a + b);
// };
