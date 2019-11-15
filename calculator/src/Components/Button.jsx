/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onClick: handler, name, style, label,
    } = this.props;
    return (
      <button name={name} onClick={handler} style={style}>
        {label || name}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
  label: PropTypes.string,
};

Button.defaultProps = {
  style: {
    color: "black",
    backgroundColor: "steelgray",
  },
  label: "",
};
export default Button;
