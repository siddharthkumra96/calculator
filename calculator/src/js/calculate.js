let operand1 = "";
let operand2 = "";
let operator = "";
const operate = (op1, oper, op2) => {
  const a = parseFloat(op1);
  const b = parseFloat(op2);
  switch (oper) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
  }
  return 0;
};

const calculate = (currentValue, op, reset = false, toggle = false) => {
  if (!reset) {
    if (toggle) {
      operand1 = String(parseFloat(operand1) * -1);
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
            operand2 = parseFloat(operand2) / 100;
          }
          // set the result to operand1 as any more operations will make the result operand1
          operand1 = +operate(operand1, operator, operand2).toFixed(3);
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
    return String(operand1);
  }
  // defaults on reset
  operand1 = "";
  operator = "";
  operand2 = "";
  return "";
};
export default calculate;
