// const data = [10];
// const foo = () => {
//   data.push(data[data.length - 1] + 10);
//   console.log(data);
// };
// data.map(()=>{
//     `<h1>Hello</h1>`
// })

//ARROW FUNCTION
// const foo = (a, b) => console.log(a + b);
// foo(3, 5);
// function name (n){
//   console.log(`hello ${n}`);
// };
// name("Mehmood Alam");

// const name = function (n) {console.log(n);}
// name("Hello Mehmood Alam");

// const foo = () => {
//   if(age === 18){
//     console.log("WellCome");
//   }
// };
// let age = 17;

// const foo = () => {
//   if(age >= 18){
//     console.log("WellCome!");
//   } else {
//     console.log("Tata byby");
//   }
// };

// const foo = function () {
//   return console.log("Hello Mehmood Alam");
// }

// const fooo = (n) => {
//   return `Hello ${n}`;
// };
// console.log(fooo("Friends"));

// const name = (e, age) => console.log(`Wellcome ${e} - ${age}`);
// name("Mehmood Alam", 30);
// console.log(typeof name);

//REST OPERATOR
// const func = (...props) => {
//     console.log(props);
// }
// func("Mehmood","Asad","Noman")

// function myBio(firstName, lastName, ...otherInfo) {
//   console.log(otherInfo);
//   return otherInfo;
// }
// myBio("Mehmood", "Alam", 10, 20, 30);
// myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// function printMyName(...value) { //ILLEGAL
//     "use strict";
//     console.log(printMyName());
//     return value;
//   }

//How the Rest Operator Work in a Destructuring Assignment
// const [firstName, lastName, ...otherInfo] = [
//   "mehmood",
//   "Alam",
//   58,
//   "kufW12@.",
//   584313,
// ];
// console.log(otherInfo);

//REST VARIABLE = REST OPERATOR + REGULAR VARIABLE
// const {firstName, lastName, ...otherinf} = {
//     firstName: "Fareed",
//     lastName: "Alam",
//     companyName: "Microsoft",
//     profession: "Web Deveoper",
//     userExperience: "2 Years"
// };
// console.log(otherinf.profession);

// const arr = [2, 3, 8, 4];
// // console.log(arr);
// const foo = (num, ...arry) => {
//   console.log(num);
// };
// foo(450, arr);

const arr = [10, 20, 30, 40, 458, 2465, 3, 56];
// debugger
// const func = (num, ...props) => {
//   sum = 0;
//     props.map((e) => {
//         sum += e;
//     })
//     console.log(sum);
// };
// func(450, ...arr);

// const foo = (...props) => {
//   let sum = 0;
//   for (let i = 0; i < props.length; i++) {
//     sum += props[i];
//   }
//   console.log(sum);
// };
// foo(...arr);
