import Big from "big.js";

let operand1 = "";
let operand2 = "";
let operator = "";
const operate = (op1, oper, op2) => {
  const a = Big(op1);
  const b = Big(op2);
  switch (oper) {
    case "+":
      return a.plus(b);
    case "-":
      return a.minus(b);
    case "*":
      return a.times(b);
    case "/":
      return a.div(b);
    default:
  }
  return 0;
};

const calculate = (currentValue, op, reset = false, toggle = false) => {
  if (!reset) {
    if (toggle) {
      operand1 = Big(operand1).times(-1).toString();
    } else if (!(operand1 || operand1 === 0)) {
      // entering the first operand
      operand1 = currentValue;
      // if just after entering operand, the user clicks the perc sign
      if (op === "%") {
        operand1 = parseFloat(operand1) / 100;
      } else {
        operator = op;
      }
    } else if (!operator) {
      // used in case the user does any operation on the result
      operator = op;
    } else if (!operand2) {
      // to skip multiple '=' press
      if (!(operator === op && op === "=")) {
      // only move ahead if there is some value entered, basically skipping multiple op presses
        if (currentValue) {
          operand2 = currentValue;
          if (op === "%") {
            operand2 = Big(operand2).div(100).toString();
          }
          // set the result to operand1 as any more operations will make the result operand1
          operand1 = operate(operand1, operator, operand2).toString();
          // setting the operator and operand2 to default values for the next iteration
          operand2 = "";
          operator = (op === "=" || op === "%") ? "" : op;
        } else {
          operator = op;
        }
      } else {
        operator = "";
      }
    }
    return operand1;
  }
  // defaults on reset
  operand1 = "";
  operator = "";
  operand2 = "";
  return "";
};
export default calculate;
