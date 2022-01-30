//Factorial Function.
export function factorial(number) {
  let result = 1;
  for(let i = 1; i <= number; i++){
    result = result * i;
  }
  return result;
}

//Get Power Base Number
export function toThePower(equation, power, value) {
  return equation(value, power);
}

//Square Root Function.
export function squareRoot(equation, value){
  return equation(value);
}
