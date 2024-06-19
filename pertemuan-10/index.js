//Module
//Export dan import
// console.log("Modul in JS");
// import { name, numbers, sayHello } from "./utils.js";
// console.log(name);
// console.log(numbers);
// console.log(sayHello);

//Export AS

//Export default
//- hanya bisa 1 
//- tidak menggunakan kurung kurawal dan bisa diganti namanya tanpa as
//- paling cocok digunakan untuk mengexport fungsi

// //Synchronous
// //hanya dalam 1 thread atau sat per satu
// //Blocking atau suatu proseds akan dijalankan apabila proses sebelumnya telah selesai
// console.log("antrian 1");
// console.log("antrian 2");
// console.log("antrian 3");

// //Asynchronous
// //multi-thread dan non-blocking
// //melakukan lebih dari 1 proses sekaligus
// //tidak menunggu proses sebelumnya selesai
// setTimeout(() => { //menerima 2 parameter yaitu fungsi dan milliseconds 
//     //atau berapa banyak waktu yang dibutuhkan
//     console.log("Cuci baju"); // proses asynchronous
//   }, 5000);
// setTimeout(() => {
//     console.log("Menyapu");
// }, 3000);
//   console.log("Mengepel");
//   console.log("Memasak");

//   //2 JENIS ASYNCGRONOUS
//   //concurrent dan pararel
//   //pararel adalah proses yang jalan bersama namun berhentinya dapat berbeda
// setTimeout(() => {  
//     console.log("Proses1"); 
// }, 1000);
// setTimeout(() => {
//     console.log("Proses2");
// }, 5000);
// setTimeout(() => {  
//     console.log("Proses3"); 
// }, 5000);
// setTimeout(() => {  
//     console.log("Proses4"); 
// }, 4000);

// //concurrent proses saling menunggu didalamnya
// //dimasukkan kedalam calback
// setTimeout(() => {  
//     console.log("Proses1"); 
//     setTimeout(() => {
//         console.log("Proses2");
//         setTimeout(() => { 
//             console.log("Proses3");
//             setTimeout(() => {
//                 console.log("Proses4");
//             }, 2000);
//         }, 2000);
//     }, 2000);  
// }, 2000);

//Promise
//adalah sebuah class dengan 3 status :
//- pending, jika data sedang diproses.
//- fulfilled, jika data telah berhasil didapatkan.
//- rejected, jika data gagal didapatkan.
let newPromise = new Promise((resolve, reject) => {
    if (true) {
      // apa yang dilakukan jika promise fulfilled
      resolve("Berhasil");
    } else {
      // apa yang dilakukan jika promise rejected
      reject("Gagal");
    }
});

// //Menggunakan atau consume
// //.then
// newPromise.then((result) => console.log (result));
// newPromise
// .then(())

// //async/wait
// //wajib membuat fungsi
// const getData = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// };
// getData();

//FETCH 