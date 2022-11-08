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

//   3) Якщо значення змінної кратно(тобто ділеться без остачі)
//на 7 і одночасно кратна 3 - виводимо "you win!", інакше - "you loose"

let number = 3;

if (number % 7 === 0 && number % 3 === 0) {
  console.log("you win!");
} else {
  console.log("you loose");
}
