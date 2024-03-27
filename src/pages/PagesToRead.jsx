import { useLoaderData } from "react-router-dom";
import ShapeBar from "../components/ShapeBar";

const PagesToRead = () => {
  const data = useLoaderData();

  return (
    <div className="container mt-8 mx-auto min-h-[80vh] bg-gray-100 rounded-lg flex justify-center items-center">
      <ShapeBar fetchData={data} />
    </div>
  );
};

export default PagesToRead;
