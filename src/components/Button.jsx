import PropTypes from "prop-types";

const Button = ({ message, bgColor, textColor, handlerFunction, ...props }) => {
  return (
    <button
      onClick={handlerFunction ? () => handlerFunction() : null}
      className={`btn min-h-8 h-8 px-3 sm:min-h-10 sm:px-5 md:px-6 font-medium sm:font-semibold border-none hover:text-clr-primary ${bgColor} ${textColor}`}>
      {message}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  message: PropTypes.string,
  routerLink: PropTypes.string,
  handlerFunction: PropTypes.func,
};
export default Button;
