import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
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
  const renderCustomBarLabel = ({
    payload,
    x,
    y,
    width,
    height,
    value,
    fill,
  }) => {
    return (
      <text x={x + width / 2} y={y} fill={fill} textAnchor="middle" dy={-6}>
        {`${value}`}
      </text>
    );
  };

  if (chartData.length === 0) {
    return (
      <div className="container mt-8 mx-auto min-h-[80vh] bg-gray-100 rounded-lg flex justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          No readed book yet
        </h1>
      </div>
    );
  }

  return (
    <div className=" h-full w-full flex justify-center items-center">
      <ResponsiveContainer width="80%" aspect={2}>
        <BarChart data={chartData}>
          <XAxis dataKey="bookName" />
          <YAxis />
          <CartesianGrid stroke="#999" strokeDasharray="5 5" />
          <Bar
            dataKey="totalPages"
            shape={<TriangleBar />}
            label={renderCustomBarLabel}>
            {chartData.map((item) => (
              <Cell fill={item.fill} key={item.bookId} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ShapeBar.propTypes = {
  fetchData: PropTypes.array,
};

export default ShapeBar;
