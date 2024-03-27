import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkRoundFullReal = ({
  message,
  bgColor,
  textColor,
  routerLink,
  ...props
}) => {
  return (
    <Link
      to={routerLink}
      className={`btn min-h-7 h-7 px-3 sm:min-h-9 sm:px-5 text-sm font-medium  rounded-full ${bgColor} ${textColor}`}>
      {message}
    </Link>
  );
};

LinkRoundFullReal.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  message: PropTypes.string,
  routerLink: PropTypes.string,
};

export default LinkRoundFullReal;
