//IIFE  
(function() {
function calculateBMI(berat, tinggi){ 
    let bmi = berat / (tinggi * tinggi) 
    let classification; 
    if (bmi < 18.5) {
        classification = 'underweight'
    } else if (bmi >= 18.5 && bmi < 24.9){
        classification = ' normal weight'
    } else if (bmi >= 25) {
        classification = 'overweight'
    } else if (bmi > 25 && bmi <= 29.9){
        classification = 'obese'
    }
    return classification

}
let output = calculateBMI(55, 1.7) 
console.log("BMI anda adalah = " + output)
}())

//Callback
function calculateBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    let classification;
    if (bmi < 18.5) {
        classification = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = 'normal weight';
    } else if (bmi >= 25) {
        classification = 'overweight';
    } else if (bmi > 25 && bmi <= 29.9) {
        classification = 'obese';
    }
    callback(classification);
}

function displayBMIResult(result) {
    console.log("BMI anda adalah = " + result);
}

calculateBMI(55, 1.7, displayBMIResult);
