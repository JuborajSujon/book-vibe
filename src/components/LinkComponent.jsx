import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const LinkComponent = ({
  message,
  bgColor,
  textColor,
  routerLink,
  ...props
}) => {
  return (
    <Link
      to={routerLink || ""}
      className={`btn min-h-8 h-8 px-3 sm:min-h-10 sm:px-5 md:px-6 font-medium sm:font-semibold ${bgColor} ${textColor}`}>
      {message}
    </Link>
  );
};

LinkComponent.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  message: PropTypes.string,
  routerLink: PropTypes.string,
};

export default LinkComponent;
