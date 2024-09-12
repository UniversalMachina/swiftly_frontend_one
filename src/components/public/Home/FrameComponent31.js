import React from "react";
import { useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import FrameComponent7 from "./FrameComponent7";

const FrameComponent31 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    title: "Customer Reviews",
    testimonials: [
      {
        header: "Efficient Assistance",
        subHeader: "BestBuy Shopper",
        description:
          "Stammer transformed our customer service with instant, reliable answers about BestBuy's inventory. It’s like having a personal assistant at your fingertips.",
      },
      {
        header: "Seamless Integration",
        subHeader: "Retail Manager",
        description:
          "Integrating Stammer into our operations was effortless. Now, addressing customer inquiries is smoother and faster than ever.",
      },
      {
        header: "24/7 Support",
        subHeader: "Online Shopper",
        description:
          "With Stammer, we receive consistent support anytime. Questions about products or availability? The chatbot handles them all accurately.",
      },
      {
        header: "Increased Engagement",
        subHeader: "Marketing Director",
        description:
          "Stammer has significantly boosted our customer engagement. It's a game-changer for providing quick and precise information about our products.",
      },
    ],
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="w-full flex flex-col items-start justify-start max-w-full text-left text-[40px] text-white font-poppins mq900:gap-[17px]"
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 box-border max-w-full text-[80px]">
        <div className="flex-1 bg-customColor-300 overflow-hidden flex flex-col items-start justify-start pt-[43px] px-[108px] pb-[82px] box-border gap-[67px] max-w-full mq900:gap-[17px] mq900:pl-[27px] mq900:pr-[27px] mq900:box-border mq1300:gap-[33px] mq1300:pl-[54px] mq1300:pr-[54px] mq1300:box-border">
          <h1 className="m-0 w-[564px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-[24px] mq900:text-[40px]">
            {contentData.title}
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[170px] box-border max-w-full text-[28.5px] text-white mq450:pl-5 mq450:box-border mq900:pl-[42px] mq900:box-border mq1300:pl-[85px] mq1300:box-border">
            <div className="w-[1216px] flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1700:flex-wrap">
                <FrameComponent7 {...contentData.testimonials[0]} />
                <FrameComponent7
                  {...contentData.testimonials[1]}
                  propWidth="523px"
                  propAlignSelf="unset"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1700:flex-wrap">
                <FrameComponent7
                  {...contentData.testimonials[2]}
                  propWidth="523px"
                  propAlignSelf="unset"
                />
                <div className="w-[523px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full">
                  <FrameComponent7
                    {...contentData.testimonials[3]}
                    propWidth="unset"
                    propAlignSelf="stretch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default FrameComponent31;
