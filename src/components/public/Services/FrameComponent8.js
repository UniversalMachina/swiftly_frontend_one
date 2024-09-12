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

const FrameComponent8 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const navigate = useNavigate();

  const contentData = {
    mainHeading: "Discover Stammer for BestBuy",
    subHeading: [
      "Engage with your customers effortlessly using",
      "our intelligent, personalized chatbot.",
    ],
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className={`self-stretch flex flex-row items-start py-[80px] justify-end max-w-full text-left text-[70px] text-black font-poly ${className}`}
    >
      <div className="w-[1763px] flex flex-row items-start justify-center py-0 pr-0 pl-5 box-border gap-[158px] max-w-full mq1700:flex-wrap">
        <div className="w-[625px] flex flex-col items-start justify-start pt-[146px] px-0 pb-0 box-border min-w-[625px] max-w-full mq900:min-w-full mq1700:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[115px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[106px] max-w-full">
              <h1 className="m-0 w-[510px] relative text-inherit leading-[70px] font-normal font-inherit inline-block max-w-full mq450:text-[42px] mq450:leading-[42px] mq900:text-[56px] mq900:leading-[56px]">
                {contentData.mainHeading}
              </h1>
              <h3 className="m-0 self-stretch relative text-[36px] font-light font-poppins mq450:text-[22px] mq900:text-[29px]">
                <p className="m-0">{contentData.subHeading[0]}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{contentData.subHeading[1]}</p>
              </h3>
            </div>
            <button
              className="cursor-pointer pt-[26px] pb-5 pr-[71px] pl-[78px] bg-customGray-100 w-[362.6px] box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full border-[4.6px] border-solid border-customColor-300 hover:customColor-200 hover:bg-customGray-300 hover:box-border hover:border-[4.6px] hover:border-solid"
              onClick={() => navigate("/features")}
            >
              <b className="w-[204.3px] relative text-[30.7px] leading-[50px] inline-block font-poppins text-customColor-300 text-center shrink-0">
                Learn More
              </b>
            </button>
          </div>
        </div>
        <div className="h-[1078px] flex-1 relative bg-customGray-300 min-w-[624px] max-w-full mq900:min-w-full" />
      </div>
    </animated.div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
