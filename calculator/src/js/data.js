export const operators = ["=", "+", "-", "*", "/", "%", "+/-", "A/C"];
const labels = {
  "=": "=",
  "+": "+",
  "*": "x",
  "/": "÷",
  "+/-": " ",
};
export const getLabel = (operator) => labels[operator];
export const isOperator = (op) => operators.includes(op);
export const RESET = "A/C";
export const TOGGLESIGN = "+/-";
export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
