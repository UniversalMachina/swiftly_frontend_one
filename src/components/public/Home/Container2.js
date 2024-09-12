import React from "react";
import PropTypes from "prop-types";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";

const Container2 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    mainHeading: "Customer Feedback",
    reviews: [
      {
        description:
          "Stammer is essential for navigating BestBuy's vast inventory with ease. It revolutionizes the shopping experience.",
        subDescription: "Perfect for all your queries.",
      },
      {
        description:
          "Using Stammer has streamlined customer service, providing quick and accurate answers about products.",
        subDescription: "Efficiency improved immensely.",
      },
      {
        description:
          "With Stammer, BestBuy has enhanced their support, ensuring customers find what they need effortlessly.",
        subDescription: "A must-have virtual assistant.",
      },
    ],
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className={`w-[1697px] flex flex-row items-start justify-start py-[40px] pr-5 pl-0 box-border gap-[140px] max-w-full text-left text-[70px] text-black font-poppins mq1700:flex-wrap ${className}`}
    >
      <div className="w-[703px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[703px] max-w-full mq900:min-w-full mq1700:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full">
          <div className="w-[480px] flex flex-row items-start justify-start pt-0 px-0 pb-[980px] box-border max-w-full text-center">
            <h1 className="m-0 flex-1 relative text-inherit leading-[50px] font-extralight font-inherit inline-block max-w-full mq450:text-[42px] mq450:leading-[29px] mq900:text-[56px] mq900:leading-[39px]">
              {contentData.mainHeading}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-end justify-start gap-[28px] min-w-[542px] max-w-full text-[20px] mq900:min-w-full">
        {contentData.reviews.map((review, index) => (
          <div
            key={index}
            className="self-stretch bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-[42px] pb-[29px] pr-5 pl-[46px] gap-[21px] max-w-full border-[1px] border-solid border-black"
          >
            <div className="w-[739px] relative leading-[49.16px] font-extralight inline-block max-w-full mq450:text-[16px] mq450:leading-[39px]">
              {review.description}
            </div>
            <div className="w-[393px] relative leading-[51px] font-medium inline-block max-w-full mq450:text-[16px] mq450:leading-[39px]">
              {review.subDescription}
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
