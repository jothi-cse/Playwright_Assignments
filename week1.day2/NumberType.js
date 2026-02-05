function NumberType(num) {
    let result;
    if (num > 0) {
        result = "Positive number";
    } else if (num < 0) {
        result = "Negative number";
    } else {
        result = "Zero (Neutral number)";
    }
    return result;
}
let number = -5;
console.log(number + " is " +NumberType(number));
let number1 = 6;
console.log(number1 + " is " +NumberType(number1));
let number2 = 0;
console.log(number2 + " is " +NumberType(number2));