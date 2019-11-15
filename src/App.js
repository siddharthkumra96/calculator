/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Display from "./Components/Display";
import ButtonPanel from "./Components/ButtonPanel";
import getNewState from "./js/getNewState";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "0",
      result: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { name } = e.target;
    this.setState((currentState) => getNewState(name, currentState));
  }

  render() {
    const { currentValue, result } = this.state;
    return (
      <div className="App">
        <Display value={result || currentValue} />
        <ButtonPanel handler={this.handleClick} />
      </div>
    );
  }
}
export default App;
