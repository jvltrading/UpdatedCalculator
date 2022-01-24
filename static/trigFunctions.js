//Trig Functions.
export function trig(equation, angle) {
  if(!RADIAN){
    angle = angle * Math.PI/180;
  }
  return equation(angle);
}

export function inverseTrig(equation, value) {
  let angle = equation(value);

  if(!RADIAN) {
    angle = angle * 180/Math.PI;
  }
  return angle;
}