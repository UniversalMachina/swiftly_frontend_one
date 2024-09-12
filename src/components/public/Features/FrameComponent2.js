import React from "react";
import { useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "../../../hooks/useTransition";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    subHeader: "Revolutionize your customer engagement",
    header: "Stammer: Enhancing Customer Support",
    frameComponents: [
      {
        title: "Key Features",
        description:
          "Streamline support and boost customer satisfaction with our intelligent chatbot",
        points: [
          "Dynamic question handling",
          "Real-time inventory updates",
          "Instant support responses",
        ],
      },
      {
        title: "Advanced Technologies",
        description:
          "Utilize state-of-the-art AI to optimize BestBuy’s customer service",
        points: [
          "Machine learning algorithms",
          "Natural language processing",
          "Inventory data integration",
        ],
      },
      {
        title: "Client Success",
        description:
          "Explore how Stammer has transformed support for BestBuy's customers",
        points: [
          "Increased response efficiency",
          "Enhanced customer satisfaction",
          "Improved workflow automation",
        ],
      },
    ],
  };

  return (
    <div className="flex justify-center py-[40px] w-full">
      <animated.section
        ref={ref}
        style={springs}
        className={`w-[1480px] flex flex-col items-start justify-start gap-[98px] max-w-full text-left text-[14px] text-customColor-300 font-poppins ${className}`}
      >
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center">
          <div className="w-[884px] flex flex-col items-start justify-start gap-[26px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
              <div className="w-[459px] relative leading-[17px] font-semibold inline-block shrink-0 max-w-full">
                {contentData.subHeader}
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-[58px] leading-[120%] font-semibold font-inherit mq450:text-[35px] mq450:leading-[42px] mq900:text-[46px] mq900:leading-[56px]">
              {contentData.header}
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[41px] box-border max-w-full gap-[20px] text-[28.5px] mq1300:flex-wrap mq1300:justify-center">
          {contentData.frameComponents.map((frame, index) => (
            <FrameComponent4
              key={index}
              title={frame.title}
              description={frame.description}
              points={frame.points}
            />
          ))}
        </div>
      </animated.section>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
