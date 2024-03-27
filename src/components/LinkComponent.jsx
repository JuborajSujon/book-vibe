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
      className={`btn min-h-10 h-10 px-3 sm:min-h-12 sm:px-5 md:px-7 md:min-h-14 md:h-14 font-medium sm:font-semibold sm:text-lg md:font-bold lg:text-xl ${bgColor} ${textColor}`}>
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
