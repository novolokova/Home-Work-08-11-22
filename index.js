// 1) Якщо значення змінної number позитивне або 0 
//- виводимо ''positive", інакше - "negative"
const namber = 0;

if (namber >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// 2) Є дві змінні - num1 і num2. Якщо num1>num2 -
// вивести результат віднімання, інакше - вивести результат множення

let num1;
let num2;
let result;
if (num1 > num2) {
    result = num1 - num2;
    console.log(result);
  } else {
    result = num1 * num2;
    console.log(result);
  }
