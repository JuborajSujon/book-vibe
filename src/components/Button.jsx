import { Link } from "react-router-dom";

const Button = ({ bgColor, textColor }) => {
  return (
    <Link to="/donate" className={`btn px-7 ${bgColor} ${textColor}`}>
      Donate
    </Link>
  );
};

export default Button;
