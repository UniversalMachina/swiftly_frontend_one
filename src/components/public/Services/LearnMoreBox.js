// /src/components/LearnMoreBox.js
import { useMemo } from "react";
import PropTypes from "prop-types";
import React from "react";

const LearnMoreBox = ({
  className = "",
  propBackgroundColor,
  propColor,
  propColor1,
  propColor2,
  heading,
  description,
}) => {
  const learnMoreBoxStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const lorumIpsumStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const reachOutTo1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const learnMoreStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-customColor-300 overflow-hidden flex flex-col items-center justify-start pt-[59px] pb-[53px] pr-5 pl-[21px] box-border gap-[52px] min-w-[384px] max-w-full text-center text-[28.5px] text-white font-poppins mq450:gap-[26px] mq900:min-w-full ${className}`}
      style={learnMoreBoxStyle}
    >
      <div className="w-[254.5px] flex flex-col items-start justify-start gap-[38px] mq450:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px]">
          <b className="flex-1 relative mq450:text-[23px]" style={lorumIpsumStyle}>
            {heading}
          </b>
        </div>
        <div className="self-stretch relative text-[14.6px] leading-[395%] font-medium whitespace-pre-wrap" style={reachOutTo1Style}>
          {description}
        </div>
      </div>
      <div className="w-[255px] flex flex-row items-start justify-start py-0 pr-10 pl-[39px] box-border text-[21.8px] font-dm-sans">
        <b className="flex-1 relative mq450:text-[17px]" style={learnMoreStyle}>{`Learn More >`}</b>
      </div>
    </div>
  );
};

LearnMoreBox.propTypes = {
  className: PropTypes.string,
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
  propColor2: PropTypes.any,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LearnMoreBox;
