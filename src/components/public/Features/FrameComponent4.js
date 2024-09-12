import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "", title, description, points }) => {
  return (
    <div
      className={`w-[400px] flex flex-col items-start justify-start pt-[109px] px-0 pb-0 box-border relative gap-[63px] max-w-full text-left text-[28.5px] text-black font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
        <b className="relative mq450:text-[23px] text-customColor-400">
          {title}
        </b>
        <p className="m-0 w-[257px] relative text-[16px] font-bold text-customGray-700 inline-block box-border pr-5">
          {description}
        </p>
      </div>
      <div className="w-64 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[19px] text-[16px] text-customColor-400">
        {points.map((point, index) => (
          <div key={index} className="self-stretch relative font-extrabold">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>{point}</li>
            </ul>
          </div>
        ))}
      </div>
      <img
        className="w-[59.1px] h-[63px] absolute !m-[0] top-[0px] left-[0px]"
        loading="lazy"
        alt=""
        src="/vector-24.svg"
      />
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FrameComponent4;
