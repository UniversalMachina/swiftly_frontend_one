import React from "react";
import { useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent18 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    mainTitle:
      "Elevate your retail experience with Stammer's intelligent chatbot. Fast and Reliable.",
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`relative w-full flex flex-col items-center justify-start gap-[88px] max-w-full text-left text-[80px] text-customGray-1300 font-fira-sans-condensed mq900:gap-[22px] mq1300:gap-[44px]`}
    >
      <div className="w-full text-customColor-300 overflow-hidden flex flex-row items-center justify-center py-[141px] px-[147px] box-border min-h-[553px] max-w-full mq900:pl-9 mq900:pr-9 mq900:box-border mq1300:pl-[73px] mq1300:pr-[73px] mq1300:box-border">
        <h1 className="m-0 w-full max-w-[1352px] relative text-inherit leading-[120px] font-bold font-inherit inline-block shrink-0 mq450:text-[24px] mq450:leading-[48px] mq900:text-[40px] mq900:leading-[72px]">
          {contentData.mainTitle}
        </h1>
      </div>
    </animated.section>
  );
};

export default FrameComponent18;
