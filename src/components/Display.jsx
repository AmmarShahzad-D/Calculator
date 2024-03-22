import PropTypes from "prop-types";
import "./calculator.css";
const Display = ({ displayValue }) => {
  return <div className="screen" >{displayValue}</div>;
};

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Display;
