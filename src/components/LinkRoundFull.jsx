import PropTypes from "prop-types";

const LinkRoundFull = ({ message, bgColor, textColor, ...props }) => {
  return (
    <span
      className={`btn min-h-7 h-7 px-3 sm:min-h-9 sm:px-5 text-sm font-medium  rounded-full ${bgColor} ${textColor}`}>
      {message}
    </span>
  );
};

LinkRoundFull.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default LinkRoundFull;
