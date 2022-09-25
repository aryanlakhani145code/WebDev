// Setup
let stringCont = document.getElementById("var1");
let intCont = document.getElementById("var2");
let sumFuncAns = document.getElementById("sumfunction-answer");
let if_elseAns = document.getElementById("ifelse-answer");

// Variables

// here we define our varibales for the following program

let stringVar = "Aryan";
stringCont.innerHTML = stringVar;
let integerVar = 20;
intCont.innerHTML = integerVar;

// Sum function

// creating a sum function to add two given numbers

let sumFunc = (number1, number2) => {
  return number1 + number2;
};

sumFuncAns.innerHTML = sumFunc(6, 8);

// Decision making

// making an if condition to check age. we create a decision making function to check age based on the age number given by us using the if condition

let genger = "male";
if (genger = "male") {
  if_elseAns.innerHTML = "male";
} else {
  if_elseAns.innerHTML = "female";
}

// Loops

// creating a for loop to print the square roots of numbers till 10 and also index it along with it for better readability

for (let i = 1; i < 11; i++) {
  document.write(i, ".  ", i ** 0.5 + "<br>");
}
