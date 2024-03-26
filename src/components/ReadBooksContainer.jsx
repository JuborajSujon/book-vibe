import { useContext } from "react";
import { AssetsContext } from "../pages/ListedBooks";

const ReadBooksContainer = ({}) => {
  const data = useContext(AssetsContext);
  const { readBooks, setReadBooks } = data;

  return <div></div>;
};

// ReadBooksContainer.propTypes = {
//   readBooks: PropTypes.array.isRequired,
// };

export default ReadBooksContainer;
