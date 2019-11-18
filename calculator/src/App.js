/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Display from "./Components/Display";
import ButtonPanel from "./Components/ButtonPanel";
import getNewState from "./js/getNewState";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      initial: true,
      currentValue: "0",
      result: "",
      operation: " ",
      warning: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { name } = e.target;
    this.setState((currentState) => getNewState(name, currentState));
  }

  render() {
    const {
      currentValue, result, operation, warning,
    } = this.state;
    return (
      <div className="App">
        {warning}
        <Display value={result || currentValue} operation={operation} />
        <ButtonPanel handler={this.handleClick} />
      </div>
    );
  }
}
export default App;
