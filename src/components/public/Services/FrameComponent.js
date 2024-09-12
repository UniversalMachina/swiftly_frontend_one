import React from "react";
import { useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    subHeader: "Power Your Sales",
    header: "Stammer SERVICES",
    frameComponents: [
      {
        header: "Smart Interactions",
        description:
          "Engage customers with intelligent chat interactions tailored specifically for BestBuy’s inventory. Transform inquiries into opportunities seamlessly.",
      },
      {
        header: "Instant Solutions",
        description:
          "Provide immediate, accurate answers to customer queries about products and services, enhancing their shopping experience effortlessly.",
      },
      {
        header: "Data-Driven Insights",
        description:
          "Leverage detailed analytics and customer data to refine your sales strategy, driving more personalized and effective engagements.",
      },
      {
        header: "Easy Integration",
        description:
          "Seamlessly integrate our chatbot into your system and begin engaging with customers through an intuitive, user-friendly interface.",
      },
    ],
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`w-full flex flex-col items-start justify-start max-w-full text-left text-[24px] text-white font-poppins ${className}`}
    >
      <div className="self-stretch bg-customColor-350 overflow-hidden flex flex-col items-start justify-start pt-[164px] px-[181px] pb-[169px] box-border gap-[15px] max-w-full z-[1] mq900:pl-[45px] mq900:pr-[45px] mq900:box-border mq1300:pl-[90px] mq1300:pr-[90px] mq1300:box-border">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[287px] mq450:pl-5 mq450:box-border mq900:pl-[143px] mq900:box-border">
          <b className="w-[229px] relative leading-[31px] font-semibold inline-block shrink-0 mq450:text-[19px] mq450:leading-[23px]">
            {contentData.subHeader}
          </b>
        </div>
        <div className="w-[1535px] flex flex-row items-start justify-center gap-[47px] max-w-full mq900:gap-[23px] mq1700:flex-wrap">
          <div className="w-[729px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[729px] max-w-full mq1300:min-w-full mq1700:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[102px] max-w-full mq450:gap-[25px] mq900:gap-[51px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full mq900:gap-[18px]">
                <FrameComponent1
                  header={contentData.frameComponents[0].header}
                  description={contentData.frameComponents[0].description}
                />
                <FrameComponent1
                  header={contentData.frameComponents[1].header}
                  description={contentData.frameComponents[1].description}
                />
              </div>
              <div className="w-[601px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
                <div className="flex-1 relative leading-[120%] inline-block max-w-full mq450:text-[19px] mq450:leading-[23px]">{`Reach out to new people and engage with your prospects the personalized way Reach out to new `}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[104px] min-w-[493px] max-w-full text-[128px] mq450:gap-[26px] mq900:gap-[52px] mq1300:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full">
              <b className="flex-1 relative leading-[154px] font-semibold inline-block max-w-full mq450:text-[32px] mq450:leading-[61px] mq900:text-[51px] mq900:leading-[92px]">
                {contentData.header}
              </b>
            </div>
            <div className="w-[729px] flex flex-col items-start justify-start gap-[57px] max-w-full mq900:gap-[28px]">
              <FrameComponent1
                header={contentData.frameComponents[2].header}
                description={contentData.frameComponents[2].description}
              />
              <FrameComponent1
                header={contentData.frameComponents[3].header}
                description={contentData.frameComponents[3].description}
              />
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
