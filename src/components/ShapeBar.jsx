import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { getLocalStorageData } from "../utility/localStorage";
import { useEffect, useState } from "react";
const ShapeBar = ({ fetchData }) => {
  const [chartData, setChartData] = useState([]);
  const data = getLocalStorageData("readed");

  useEffect(() => {
    const storebooks = data.map((book) => {
      const id = parseInt(book);
      return fetchData.find((item) => item.bookId === id);
    });
    setChartData(storebooks);
  }, []);

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <BarChart width={600} height={300} data={chartData}>
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

ShapeBar.propTypes = {
  fetchData: PropTypes.array,
};

export default ShapeBar;
