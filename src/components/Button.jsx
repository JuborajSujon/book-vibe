import PropTypes from "prop-types";

const Button = ({
  message,
  bgColor,
  textColor,
  handlerFunction,
  extraCss,
  ...props
}) => {
  return (
    <button
      onClick={handlerFunction ? () => handlerFunction() : null}
      className={`btn min-h-8 h-8 px-3 hover:text-white sm:min-h-10 sm:px-5 md:px-6 font-medium sm:font-semibold ${bgColor} ${textColor} ${
        extraCss || "border-none"
      }`}>
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
  extraCss: PropTypes.string,
};
export default Button;
