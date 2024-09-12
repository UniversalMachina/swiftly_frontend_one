import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent12 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    heading: "Maximize Your Sales with Stammer",
    benefits: [
      "Instant Expert Assistance",
      "Seamless User Experience",
      "Monthly Performance Insights",
      "Future-Ready Sales Strategy",
      "Efficient Customer Interaction",
    ],
  };

  return (
    <div className="flex justify-center py-[80px]">
      <animated.section
        ref={ref}
        style={springs}
        className={`w-[1567px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-[66.7px] text-customGray-1600 font-body-base-regular mq1700:flex-wrap ${className}`}
      >
        <img
          className="w-[693px] relative max-h-full object-cover max-w-full mq1700:flex-1"
          loading="lazy"
          alt=""
          src="/image-43@2x.png"
        />
        <div className="w-[628px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[628px] max-w-full mq900:min-w-full mq1700:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[67.3px] max-w-full">
            <b className="w-[572px] relative inline-block max-w-full mq450:text-[40px] mq900:text-[53px]">
              {contentData.heading}
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[26.6px] max-w-full text-[24px] mq900:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[40px]">
                <img
                  className="w-[42.7px] h-[42.7px] relative"
                  loading="lazy"
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className="w-[42.7px] h-[42.7px] relative"
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className="w-[42.7px] h-[42.7px] relative"
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className="w-[42.7px] h-[42.7px] relative"
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className="w-[42.7px] h-[42.7px] relative"
                  alt=""
                  src="/subtract.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0 box-border min-w-[363px] max-w-full mq450:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[42.6px] max-w-full">
                  <div className="self-stretch relative leading-[40px] font-medium mq450:text-[19px] mq450:leading-[32px]">
                    {contentData.benefits[0]}
                  </div>
                  <div className="w-[505.3px] relative leading-[40px] font-medium inline-block mq450:text-[19px] mq450:leading-[32px]">
                    {contentData.benefits[1]}
                  </div>
                  <div className="w-[4050.3px] relative leading-[40px] font-medium inline-block max-w-full mq450:text-[19px] mq450:leading-[32px]">
                    {contentData.benefits[2]}
                  </div>
                  <div className="w-[577.3px] relative leading-[40px] font-medium inline-block max-w-full mq450:text-[19px] mq450:leading-[32px]">
                    {contentData.benefits[3]}
                  </div>
                  <div className="w-[546.7px] relative leading-[40px] font-medium inline-block mq450:text-[19px] mq450:leading-[32px]">
                    {contentData.benefits[4]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.section>
    </div>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
