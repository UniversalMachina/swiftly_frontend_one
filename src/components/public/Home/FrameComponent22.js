import React from "react";
import { useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import ProductBenefitsContent from "./ProductBenefitsContent";

const FrameComponent22 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    mainHeading: "Why Choose Stammer for Your Needs",
    benefits: [
      {
        heading: "Chatbot Integration",
        description:
          "Connect instantly with your customers and provide them with real-time solutions.",
      },
      {
        heading: "Personalized Interaction",
        description:
          "Offer tailored responses to enhance customer relationships and satisfaction.",
      },
      {
        heading: "Data-Driven Insights",
        description:
          "Leverage advanced analytics to improve your engagement strategies and outcomes.",
      },
    ],
  };

  return (
    <div className="flex justify-center py-[80px]">
      <animated.section
        ref={ref}
        style={springs}
        className="w-full flex flex-col items-end justify-start gap-[47px] max-w-full text-center text-[64px] text-customGray-1600 font-body-base-regular mq900:gap-[23px]"
      >
        <div className="w-[1847px] flex flex-row items-start justify-center pt-0 px-5 pb-[92px] box-border max-w-full">
          <div className="w-[1618.5px] flex flex-col items-start justify-start gap-[74px] max-w-full mq450:gap-[18px] mq900:gap-[37px]">
            <div className="w-[1550px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[760px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-[36px] mq900:text-[51px]">
                {contentData.mainHeading}
              </h1>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-3.svg"
            />
          </div>
        </div>
        <ProductBenefitsContent benefits={contentData.benefits} />
      </animated.section>
    </div>
  );
};

export default FrameComponent22;
