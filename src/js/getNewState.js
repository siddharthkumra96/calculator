import calculate from "./calculate";
import { isOperator, RESET, TOGGLESIGN } from "./data";

const getNewState = (name, currentState) => {
  let newState = null;
  let { currentValue } = currentState;
  const { decimalAdded, result } = currentState;
  if (name === RESET) {
    newState = {
      currentValue: "0",
      result: "",
    };
    calculate(null, null, true);
  } else if (name === TOGGLESIGN) {
    if (result) {
      newState = {
        result: calculate(currentValue, null, false, true),
      };
    } else {
      newState = {
        currentValue: String(parseFloat(currentValue) * -1),
      };
    }
  } else if (isOperator(name)) {
    newState = {
      currentValue: "",
      decimalAdded: false,
      result: calculate(currentValue, name),
    };
  } else {
    if (currentValue === "0") {
      currentValue = "";
    }
    if (name === ".") {
      if (!decimalAdded) {
        newState = {
          currentValue: currentValue.concat(name),
          result: "",
          decimalAdded: true,
        };
      }
    } else {
      newState = {
        currentValue: currentValue.concat(name),
        result: "",
      };
    }
  }
  return newState;
};
export default getNewState;
