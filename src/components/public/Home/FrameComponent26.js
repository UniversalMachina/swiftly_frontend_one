import React from "react";
import { animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent26 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const navigate = useNavigate();

  const contentData = {
    heading: "Optimize Customer Interactions with Stammer",
    description:
      "Experience seamless support with Stammer, the intelligent chatbot optimized for Best Buy. Engage effortlessly and get instant answers.",
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className="self-stretch flex flex-row items-start justify-center py-0 pr-[27px] pl-5 box-border max-w-full text-left text-[78.6px] text-customGray-1600 font-body-base-regular"
    >
      <div className="w-[1649px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1300:flex-wrap">
        <div className="w-[545px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border min-w-[545px] max-w-full mq900:min-w-full mq1300:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28.6px] max-w-full">
            <b className="self-stretch relative leading-[88.38px] mq450:text-[47px] mq450:leading-[53px] mq900:text-[63px] mq900:leading-[71px]">
              {contentData.heading}
            </b>
            <div className="w-[452.7px] flex flex-row items-start justify-start pt-0 px-0 pb-[19.9px] box-border max-w-full text-[17.7px] text-black">
              <p className="m-0 flex-1 relative leading-[29.46px] font-medium inline-block max-w-full">
                {contentData.description}
              </p>
            </div>
            <button
              className="bg-customColor-300 hover:bg-customColor-200 cursor-pointer [border:none] py-[19.8px] px-7 rounded-[39.28px] flex flex-row items-start justify-start whitespace-nowrap"
              onClick={() => navigate("/register")}
            >
              <div className="relative text-[17.7px] font-medium font-body-base-regular text-white text-left inline-block min-w-[104px]">
                Try free trial
              </div>
            </button>
          </div>
        </div>
        <img
          className="w-[648px] relative max-h-full object-cover max-w-full mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/image-42@2x.png"
        />
      </div>
    </animated.div>
  );
};

export default FrameComponent26;
