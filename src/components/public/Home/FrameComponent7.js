import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "", propWidth, propAlignSelf, header, subHeader, description }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[523px] flex flex-col items-start justify-start gap-[29px] max-w-full text-left text-[28.5px] text-white font-poppins ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[308px] flex flex-col items-start justify-start">
        <div className="self-stretch relative font-semibold mq450:text-[23px]">
          {header}
        </div>
        <div className="w-[262px] relative text-[18px] inline-block">
          {subHeader}
        </div>
      </div>
      <p className="m-0 self-stretch h-[149px] relative text-[16px] text-white inline-block shrink-0">
        {description}
      </p>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FrameComponent7;
