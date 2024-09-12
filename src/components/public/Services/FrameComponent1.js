import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const FrameComponent1 = ({ className = "", header, description }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`self-stretch bg-customColor-300 overflow-hidden flex flex-col items-start justify-start pt-[47px] pb-12 pr-5 pl-[75px] box-border gap-[33.5px] max-w-full text-left text-[24px] text-white font-poppins mq900:gap-[17px] mq900:pl-[37px] mq900:box-border ${className}`}
    >
      <div className="w-[426px] flex flex-row items-start justify-start gap-[37px] max-w-full mq450:gap-[18px] mq900:flex-wrap">
        <img
          className="h-[60px] w-[63px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/vector-20.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[200px]">
          <div className="self-stretch relative font-semibold mq450:text-[19px]">
            {header}
          </div>
        </div>
      </div>
      <div className="w-[523px] relative text-[20px] font-semibold text-white inline-block max-w-full mq450:text-[16px]">
        {description}
      </div>
      <div
        className="w-[252px] relative leading-[29px] font-light inline-block cursor-pointer mq450:text-[19px] mq450:leading-[23px]"
        onClick={() => navigate("/features")}
      >
        {`Learn More ->`}
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FrameComponent1;
