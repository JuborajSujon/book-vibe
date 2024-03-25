import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  message,
  bgColor,
  textColor,
  routerLink,
  handlerFunction,
  ...props
}) => {
  return (
    <Link
      to={routerLink || ""}
      onClick={handlerFunction ? () => handlerFunction() : null}
      className={`btn min-h-8 h-8 px-3 sm:min-h-10 md:min-h-12 sm:px-5 md:px-7 text-sm sm:text-lg font-medium sm:font-semibold ${bgColor} ${textColor}`}>
      {message}
    </Link>
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
