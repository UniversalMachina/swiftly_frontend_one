import React from "react";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent15 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const navigate = useNavigate();

  const contentData = {
    mainTitle: "Elevate Your Sales with Stammer",
    card1: {
      title: "Instant Responses",
      description:
        "Engage effortlessly with BestBuy customers through our intelligent chatbot.",
    },
    card2: {
      title: "Real-Time Assistance",
      description:
        "Deliver personalized support instantly with Stammer's fast and accurate responses.",
    },
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className={`self-stretch flex flex-row items-start justify-center pb-[80px] pt-[40px] pr-5 pl-[21px] box-border max-w-full text-center text-[46.2px] text-black font-poppins ${className}`}
    >
      <div className="w-[1017px] flex flex-col items-start justify-start gap-[94px] max-w-full mq900:gap-[23px] mq1300:gap-[47px]">
        <div className="self-stretch flex flex-row items-start justify-center px-5 box-border max-w-full">
          <div className="w-[685px] relative font-semibold inline-block shrink-0 max-w-full mq450:text-[28px] mq900:text-[36px]">
            {contentData.mainTitle}
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[69px] max-w-full text-left text-[35.4px] mq900:gap-[17px] mq1300:gap-[34px]">
          <div className="flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-customGray-200 overflow-hidden flex flex-col items-start justify-start pt-16 px-[47px] pb-[83px] box-border gap-[194px] min-w-[308px] max-w-full mq450:gap-[97px] mq450:pl-[23px] mq450:pr-[23px] mq450:box-border">
            <div className="w-[360px] flex flex-col items-start justify-start gap-[21px] max-w-full">
              <div className="relative font-semibold mq450:text-[21px] mq900:text-[28px]">
                {contentData.card1.title}
              </div>
              <p className="m-0 self-stretch relative text-[16px] font-bold text-customGray-700">
                {contentData.card1.description}
              </p>
            </div>
            <b
              className="w-36 relative text-[20px] inline-block font-dm-sans mq450:text-[16px] cursor-pointer"
              onClick={() => navigate("/features")}
            >
              {`Learn More >`}
            </b>
          </div>
          <div className="flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-customColor-500 overflow-hidden flex flex-col items-start justify-start pt-16 px-[47px] pb-[83px] box-border gap-[187px] min-w-[308px] max-w-full text-white mq450:gap-[93px] mq450:pl-[23px] mq450:pr-[23px] mq450:box-border">
            <div className="w-[360px] flex flex-col items-start justify-start gap-[28px] max-w-full">
              <div className="relative font-semibold mq450:text-[21px] mq900:text-[28px]">
                {contentData.card2.title}
              </div>
              <p className="m-0 self-stretch relative text-[16px] font-bold text-customGray-300">
                {contentData.card2.description}
              </p>
            </div>
            <b
              className="w-36 relative text-[20px] inline-block font-dm-sans mq450:text-[16px] cursor-pointer"
              onClick={() => navigate("/features")}
            >
              {`Learn More >`}
            </b>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;
