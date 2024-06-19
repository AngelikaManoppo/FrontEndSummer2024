// IIFE &b callback function 
// function calculateBMI(berat, tinggi){ //parameter berada dalam ()
//     let bmi = berat / (tinggi * tinggi) // proses aritmatika
//     return bmi
// }
// let output = calculateBMI(55, 1.7) //nilai return akan diletakan disini
// console.log("BMI anda adalah = " + output) //memangggil variabel output untuk mengeluarkan hasil

//IIFE (Imediate;y invoked dunction expression)

(function (){
    console.log("Hello IIFE")
})()

//callback function
//VERSI 1
function greetings(){
    console.log ('Hello')
}
function sayHello(callback){ //menerima parameter fungsi(dalam hal ini fungsi greetings/callback
    callback()
}
//greetings nantinya akan terpangill jika di variabel sayHello
sayHello(greetings)

//VERSI 2
function sayHello(callback){ //menerima parameter fungsi(dalam hal ini fungsi greetings/callback
    callback()
}
//greetings nantinya akan terpangill jika di variabel sayHello
sayHello(function (){
    console.log('Hello')
})