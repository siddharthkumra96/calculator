import calculate from "./calculate";
import { isOperator, RESET, TOGGLESIGN } from "./data";

const getNewState = (name, currentState) => {
  let newState = null;
  let { currentValue } = currentState;
  const { decimalAdded, result, initial } = currentState;
  if (name === RESET) {
    newState = {
      initial: true,
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
    if (initial) {
      currentValue = "";
      newState = {
        initial: false,
      };
    }
    if (name === ".") {
      if (!decimalAdded) {
        newState = {
          ...newState,
          currentValue: currentValue.concat(name),
          result: "",
          decimalAdded: true,
        };
      }
    } else {
      newState = {
        ...newState,
        currentValue: currentValue.concat(name),
        result: "",
      };
    }
  }
  return newState;
};
export default getNewState;
