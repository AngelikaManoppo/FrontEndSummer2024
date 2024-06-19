// //JavaScript loop
// //for
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

//   //while
// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// //array build-in method
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++)  //menggunakan index jadi index 0 = 1 dan 5 adalah index 4
//   console.log(arr[i]); 

const students = [
    {
        id : 1,
        name : 'john',
        isActive : true,
        grade : 80,
    },
    {
        id : 2,
        name : 'jack',
        isActive : true,
        grade : 90,
    },
    {
        id : 3,
        name : 'bob',
        isActive : false,
        grade : 95,
    },
];
// //menampilkan elemnt array semua sekaligus
// console.log(students);

// //menampilkan element array satu per satu
// for(let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// Array build in method
// Array.forEach()
// students.forEach(function(item) {
//     console.log(item);
// });

// //Array.map()
// let output = students.map(function(item) {
//     item.grade += 5;
//     return item;
// });
// console.log(students);
// console.log(output);

// const array1 =  [1, 4, 9, 16];
// const map1 = array1.map(function (item) {
//     return item*2;

// });
// console.log(map1);

//Array.filter (mengfilter output yang diinginkan)
let filteredStudent = students.filter(function (item) {
    return item.isActive === false
});
console.log(filteredStudent);

//Array.find
let findStudent = students.find(function (item) {
    return item.isActive === true;
});
console.log(findStudent);
