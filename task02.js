// BMI Calculation 
let weight = 30;
let height = 1.6;
let BMI = (weight / (height * height));

// if(BMI < 18.5){
//     console.log("You are Underweight!")
// }
// else if(BMI >= 18.5 && BMI <= 24.9) {
//     console.log("You are Normal")
// }
// else if(BMI >= 25 && BMI <= 29.9){
//     console.log("You are Overweight")
// }
// else{
//     console.log("You are obese!")
// }

// ternery oparation 

BMI < 18.5 ? console.log("You are underweight") : BMI >= 18.5 && BMI <= 24.9 ? console.log("You are normal") : BMI >= 25 && BMI <= 29.9 ? console.log("You are overweight") : console.log("You are obese!")