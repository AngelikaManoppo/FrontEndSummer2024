//JavaScript EcmaScript (ES) 6

//let dan const
//penggunaan let dan const pada array dan object

// const number = [1, 2, 3, 4, 5];
// number[2] = 10;
// console.log(number);

// const john = {
//     firstName : 'john',
//     age : 38,
//     isActive : true,
// };
// john.age = 31;
// console.log(john);

//pada const isi boleh diganti tapi tidak untuk keseluruhannya

// //string literal
// let john = {
//     firstName : 'john',
//     age : 38,
//     isActive : true,
// };
// let string5 = "Nama saya " + john.firstName + ". " + "Umur saya " + john.age + ".";
// console.log(string5);

// //backtip (``) jika terlalu banyak variabel
// let string6 = `Nama saya ${john.firstName}. Umur saya ${john.age}.`

// //Arrow Function
// function greetings() { //cara lama
//     return "Hello World";
// } 
// // deklarasi arrow function
// const greetings61 = () => {
//     return "Hello World";
// };
// const greetings6 = (name) => {
//     return `hello ${name}`;
// };

// //implicit rerutn value
// const greetings7 = (name) => `Hello ${name}`;

// //penggunaan array function pada callback funstion
// let numbers = [1, 2, 3, 4, 5];
// let output = numbers.map((item) => item * 5);
// console.log(output);

// //default parameter
// const greetings = (name, age) => 
//     `Hi, nama saya ${name}. Umur saya ${age} tahun.`;
// console.log(greetings("John", 30));

// //memberikan default value
//cara lama
// const greetings2 = (name, age) =>  {
//     if (name === undefined) {
//         name = "John";
//     }
//     if (age === undefined)
// }
//     `Hi, nama saya ${name}. Umur saya ${age} tahun.`;
// console.log(greetings("John", 30));

//cara baru menetapkan default value
const greetings = (name = "John", age = 30) => 
    `Hi, nama saya ${name}. Umur saya ${age} tahun.`;
console.log(greetings("stanley", 35));
