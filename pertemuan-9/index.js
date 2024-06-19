//Rest parameter dan Rest operator
// menggunakan simbol tiga titik (...)
//dalam parameter maka disebut rest parameter atau ARRAY parameter
const foo = (...params) => { // yang didefinisikan 1 parameter
    console.log(params);
};
foo("A", "B", "C") //namun saat diberikan value ia menampung banyak data
//Jika tanpa rest maka parameter yang dibuat akan banyak

//rest parameter sebagai parameter terakhir 
//mengambil sisa parameter yang belum diambil sebelumnya
const foo2 = (param1, param2, ...params) => { 
    console.log("Argument pertama :", param1);
    console.log("Argument keduas :", param2);
    console.log(params);
};
foo2("A", "B", "C", "D", "E")

//Spread operator
//memecah array menjadi element-elementnya / objek menjadi pasangan properti nilai yang membentuknya
let arrayBilangan = [1, 2, 3, 4, 5];
//tanpa spread operator
console.log(arrayBilangan);
//dengan spread operator
console.log(...arrayBilangan); //dia memecah array sehingga sudah tidak dalam bentuk array lagi
//apa kegunaan memecah array?
//1. Untuk duplikasi array

let arrayAsli = [1, 2, 3];
let arrayDuplikat  =[...arrayAsli];
console.log(arrayAsli);
console.log(arrayDuplikat);
//menggunakan spread/memecah array agar saat kita mengubah nilai di 1 array, maka tidak akan berpengaruh pada array lainnya

//Menggabungkan array
let array1 = ["foo", "bar"];
let array2 = ["fizz", "buzz"];

//tidak menggunakan spread operator
let combineArray = array1.concat(array2);
console.log(combineArray);
//menggunakan spread operator
array1 = [...array1, ...array2];
console.log(array1)

//Menambahkan properti dalam sebuah objek
let john = {
    name : "John",
    age : 32
};
//tanpa spread operator
john.job = "Teacher";
//dengan menggunakan spread operator
john = {...john, job: "Teacher"};
console.log(john);

//Destructuring
//destrukturisasi array
let numbers = [1, 2, 3, 4, 5]; //strukturisasi
//destruksturisasi tidak efficient yaitu mengambil array satu persatu dan dimasukan dalam variable berbeda-beda
numbers1 = numbers[0]
numbers2 = numbers[1]
numbers3 = numbers[2]
numbers4 = numbers[3]
numbers5 = numbers[4]

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log(numbers5);

let numberss = [1, 2, 3, 4, 5];
//destrukturisasi yang baik dan efficient
let [num1, num2, num3, num4, num5] = numberss;
console.log(num1);

//Destructuring Object
let john2 = {
    name : "John2",
    age : 32,
    isMarried : true
};
const{ name } = john2;
console.log(name);
