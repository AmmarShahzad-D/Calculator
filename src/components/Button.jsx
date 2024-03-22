import PropTypes from 'prop-types';
import "./Button.css"
const Button = ({ value, onClick }) => {

  const handleClick = (event) => {
    onClick(event.target.value)
    console.log(event.target.value, event)
  }

  return (
    <center>
      <div className="buttonMap" >
        {
          value.map((value, index) => {
            return (
              <div className="ButtonContainer" key={index}>
                <button className="button" onClick={handleClick} type="button" value={value} >{value}</button>
              </div>
            )
          })
        }
      </div>
    </center>
  )
}

Button.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;
