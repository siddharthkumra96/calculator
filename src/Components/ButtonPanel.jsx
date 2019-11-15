/* eslint-disable no-useless-constructor */
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./Styles/ButtonPanel.css";
import { operators, numbers } from "../js/data";

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      color: "white",
      backgroundColor: "#f5923e",
    };
  }

  render() {
    const { handler } = this.props;
    return (
      <div className="panel">
        <div className="row">
          <Button name={operators[7]} onClick={handler} />
          <Button name={operators[6]} onClick={handler} />
          <Button name={operators[5]} onClick={handler} />
          <Button
            name={operators[4]}
            onClick={handler}
            label="÷"
            style={this.style}
          />
        </div>
        <div className="row">
          <Button name={numbers[7]} onClick={handler} />
          <Button name={numbers[8]} onClick={handler} />
          <Button name={numbers[9]} onClick={handler} />
          <Button
            name={operators[3]}
            onClick={handler}
            label="x"
            style={this.style}
          />
        </div>
        <div className="row">
          <Button name={numbers[4]} onClick={handler} />
          <Button name={numbers[5]} onClick={handler} />
          <Button name={numbers[6]} onClick={handler} />
          <Button name={operators[2]} onClick={handler} style={this.style} />
        </div>
        <div className="row">
          <Button name={numbers[1]} onClick={handler} />
          <Button name={numbers[2]} onClick={handler} />
          <Button name={numbers[3]} onClick={handler} />
          <Button name={operators[1]} onClick={handler} style={this.style} />
        </div>
        <div className="lastRow">
          <Button name={numbers[0]} onClick={handler} />
          <Button name={numbers[10]} onClick={handler} />
          <Button name={operators[0]} onClick={handler} style={this.style} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default ButtonPanel;
