import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex h-[30vh] flex-col justify-center items-center">
      <ScaleLoader size={100} color="#23BE0A" />
    </div>
  );
};

export default Loader;
