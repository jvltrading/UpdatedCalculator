//Factorial Function.
export function factorial(number) {
  if(number % 1 != 0)
    return gamma(number + 1);
  if(number === 0 || number === 1)
    return 1;

  let result = 1;
  for(let i = 1; i < number; i++){
    result *= i;
    if(result === Infinity) return Infinity;
  }
  return result;
}

//Get Power Base Number
export function toThePower(formula, value) {

}

//Square Root Function.
export function squareRoot(callback, value){
  console.log(callback);
  console.log(value);
  return callback(value);
}
