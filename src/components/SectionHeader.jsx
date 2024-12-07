import PropTypes from "prop-types";
const SectionHeader = ({ textInner }) => {
  return (
    <div className=" bg-gray-300 text-slate-700 rounded-lg">
      <h2 className="text-2xl sm:text-3xl p-3 font-bold mb-5 md:mb-8 text-center ">
        {textInner}
      </h2>
    </div>
  );
};

SectionHeader.propTypes = {
  textInner: PropTypes.string.isRequired,
};
export default SectionHeader;
