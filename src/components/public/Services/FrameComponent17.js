import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import { useFadeInEffect } from "../../../hooks/useTransition";

const FrameComponent17 = ({ className = "" }) => {
  const { ref, springs } = useFadeInEffect();
  const contentData = {
    mainTitle: "Engage Better with Stammer",
    cards: [
      {
        imgSrc: "/vector-4 white.svg",
        text: "Boost customer interaction with Stammer's intelligent chatbot.",
      },
      {
        imgSrc: "/vector-4.svg",
        text: "Enhance your client support using Stammer’s smart solutions.",
      },
      {
        imgSrc: "/vector-4 white.svg",
        text: "Optimize sales inquiries with Stammer’s advanced capabilities.",
      },
      {
        imgSrc: "/vector-4.svg",
        text: "Streamline service with Stammer’s intuitive chatbot interface.",
      },
    ],
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[41px] pb-[83px] pr-[195px] pl-[228px] box-border gap-[39px] max-w-full text-left text-[32px] text-customGray-1100 font-poppins mq900:gap-[19px] mq900:pl-[57px] mq900:pr-12 mq900:box-border mq1300:pl-[114px] mq1300:pr-[97px] mq1300:box-border ${className}`}
    >
      <div className="w-[847px] relative font-semibold text-customColor-300 inline-block max-w-full mq450:text-[19px] mq900:text-[26px]">
        {contentData.mainTitle}
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[33px] max-w-full text-[20px] text-black mq900:gap-[16px]">
        <div className="flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-customColor-300 text-white overflow-hidden flex flex-col items-start justify-start pt-[33.5px] pb-14 pr-5 pl-[31px] box-border gap-[23.7px] min-w-[307px] max-w-full">
          <img
            className="w-[39.9px] h-[38.8px] relative"
            loading="lazy"
            src={contentData.cards[0].imgSrc}
          />
          <div className="w-[287px] relative font-medium inline-block mq450:text-[16px]">
            {contentData.cards[0].text}
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[33.5px] pb-14 pr-5 pl-[31px] box-border gap-[23.7px] min-w-[307px] max-w-full">
          <img
            className="w-[39.9px] h-[38.8px] relative"
            loading="lazy"
            src={contentData.cards[1].imgSrc}
          />
          <div className="w-[287px] relative font-medium inline-block mq450:text-[16px]">
            {contentData.cards[1].text}
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-customColor-300 text-white overflow-hidden flex flex-col items-start justify-start pt-[33.5px] pb-14 pr-5 pl-[31px] box-border gap-[23.7px] min-w-[307px] max-w-full">
          <img
            className="w-[39.9px] h-[38.8px] relative"
            loading="lazy"
            src={contentData.cards[2].imgSrc}
          />
          <div className="w-[287px] relative font-medium inline-block mq450:text-[16px]">
            {contentData.cards[2].text}
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_15.3px_5px_rgba(0,_0,_0,_0.1)] rounded-[23px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[33.5px] pb-14 pr-5 pl-[31px] box-border gap-[23.7px] min-w-[307px] max-w-full">
          <img
            className="w-[39.9px] h-[38.8px] relative"
            loading="lazy"
            src={contentData.cards[3].imgSrc}
          />
          <div className="w-[287px] relative font-medium inline-block mq450:text-[16px]">
            {contentData.cards[3].text}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
