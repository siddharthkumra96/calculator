import Big from "big.js";
import calculate from "./calculate";
import {
  isOperator, RESET, TOGGLESIGN, getLabel,
} from "./data";

Big.PE = 307;
const getNewState = (name, currentState) => {
  let newState = null;
  let { currentValue } = currentState;
  const {
    decimalAdded, result, initial, warning,
  } = currentState;
  if (warning) {
    newState = {
      warning: "",
    };
  }
  if (name === RESET) {
    newState = {
      warning: "",
      initial: true,
      currentValue: "0",
      result: "",
      operation: " ",
    };
    calculate(null, null, true);
  } else if (name === TOGGLESIGN) {
    if (result) {
      newState = {
        ...newState,
        result: Big(calculate(currentValue, null, false, true)).toString(),
      };
    } else {
      newState = {
        ...newState,
        currentValue: String(parseFloat(currentValue) * -1),
      };
    }
  } else if (isOperator(name)) {
    newState = {
      ...newState,
      currentValue: "",
      decimalAdded: false,
      result: calculate(currentValue, name),
      operation: getLabel(name) || name,
    };
  } else if (Number(currentValue) > Number.MAX_VALUE) {
    newState = { ...currentState, warning: "Threshold Reached" };
  } else {
    if (initial) {
      currentValue = "";
      newState = {
        ...newState,
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
