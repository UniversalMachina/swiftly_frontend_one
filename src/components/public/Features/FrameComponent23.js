import React from "react";
import { animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const FrameComponent23 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const navigate = useNavigate();

  const contentData = {
    mainHeading: "Stammer",
    mainDescription1: `Simplify your customer interactions with Stammer, the chatbot tailored for Best Buy. Enhance engagement and provide quick answers using real-time inventory data from Best Buy.`,
    mainDescription2: `Transform your sales approach with Stammer. Engage, inform, and convert prospects seamlessly.`,
    statistics: [
      {
        value: "24/7",
        description: "Continuous support and engagement",
      },
      {
        value: "99%",
        description: "Accurate answers based on inventory",
      },
      {
        value: "100+",
        description: "Questions answered instantly",
      },
    ],
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className="flex justify-center py-[40px]"
    >
      <section className="w-[1812px] flex flex-col items-start justify-start gap-[143px] max-w-full text-left text-[52.4px] text-black font-poppins">
        <div className="w-[1597px] flex flex-row items-start justify-center pt-0 px-5 pb-[101px] box-border max-w-full">
          <div className="w-[1395px] flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[39px]">
              <div className="w-[174.3px] relative font-semibold inline-block mq450:text-[31px] mq900:text-[42px]">
                {contentData.mainHeading}
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[33px] text-[24px]">
                <div className="self-stretch relative leading-[154.2%] mq450:text-[19px] mq450:leading-[30px]">
                  {contentData.mainDescription1}
                </div>
                <div className="self-stretch h-[139px] relative leading-[154.2%] inline-block shrink-0 mq450:text-[19px] mq450:leading-[30px]">
                  {contentData.mainDescription2}
                </div>
              </div>
            </div>
            <div className="w-[778px] flex flex-row items-start justify-start gap-[74px] max-w-full mq900:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[36px] min-w-[140px] mq900:flex-1">
                <div className="w-[200px] flex flex-col items-start justify-start gap-[20px]">
                  <b className="w-[174.3px] text-customColor-300 relative font-semibold inline-block mq450:text-[31px] mq900:text-[42px]">
                    {contentData.statistics[0].value}
                  </b>
                  <div className="self-stretch h-[88px] relative text-[20px] leading-[154.2%] inline-block shrink-0 mq450:text-[16px] mq450:leading-[25px]">
                    {contentData.statistics[0].description}
                  </div>
                </div>
                <b
                  className="self-stretch text-customColor-300 relative text-[28.1px] font-dm-sans mq450:text-[22px] cursor-pointer"
                  onClick={() => navigate("/features")}
                >
                  {`Learn More >`}
                </b>
              </div>
              <div className="flex-[0.9302] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border gap-[20px] min-w-[140px] mq900:flex-1">
                <b className="w-[174.3px] text-customColor-300 relative font-semibold inline-block mq450:text-[31px] mq900:text-[42px]">
                  {contentData.statistics[1].value}
                </b>
                <div className="self-stretch h-[88px] relative text-[20px] leading-[154.2%] inline-block shrink-0 mq450:text-[16px] mq450:leading-[25px]">
                  {contentData.statistics[1].description}
                </div>
              </div>
              <div className="w-[200px] flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[174.3px] text-customColor-300 relative font-semibold inline-block mq450:text-[31px] mq900:text-[42px]">
                  {contentData.statistics[2].value}
                </div>
                <div className="self-stretch h-[88px] relative text-[20px] leading-[154.2%] inline-block shrink-0 mq450:text-[16px] mq450:leading-[25px]">
                  {contentData.statistics[2].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </animated.div>
  );
};

export default FrameComponent23;
