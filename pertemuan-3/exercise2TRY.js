//pembahasan exercise 1 dan ditambah dengan klasifikasi
function BMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi
 }
let berat = 50 
let tinggi = 1.7


let bmi = BMI(berat , tinggi);
console.log(berat, "kg")
console.log(tinggi, "m")
console.log(bmi)


function calculateBMI(berat, tinggi){ //parameter berada dalam ()
    let bmi = berat / (tinggi * tinggi) // proses aritmatika
    let classification; //ditambah operasi unutk menentukan classifikasi denfan if-else
    if (bmi < 18.5) {
        classification = 'underweight'
    } else if (bmi >= 18.5 && bmi < 24.9){
        classification = ' normal weight'
    } else if (bmi >= 25) {
        classification = 'overweight'
    } else if (bmi > 25 && bmi <= 29.9){
        classification = 'obese'
    }
    return classification //mengembalikan nilai

}
let output = calculateBMI(55, 1.7) //nilai return akan diletakan disini
console.log("BMI anda adalah = " + output) //memangggil variabel output untuk mengeluarkan hasil


function greetings(){
    console.log ('Hello')
}
function sayHello(callback){ //menerima parameter fungsi(dalam hal ini fungsi greetings/callback
    callback()
}
//greetings nantinya akan terpangill jika di variabel sayHello
sayHello(greetings)