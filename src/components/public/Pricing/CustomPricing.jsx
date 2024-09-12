import React from "react";
import { useNavigate } from "react-router-dom";
const CustomPricing = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-center pt-[149.3px] pb-[149.4px] pr-[195px] pl-[194.7px] box-border max-w-full text-left text-[40px] text-black font-poppins mq450:gap-[27px_106.7px] mq450:py-[97px] mq450:px-5 mq450:box-border mq800:gap-[53px_106.7px] mq800:pl-12 mq800:pr-12 mq800:box-border mq1350:pl-[97px] mq1350:pr-[97px] mq1350:box-border">
      <div className="w-[938.4px] flex flex-row flex-wrap items-center justify-center gap-[57.2px] max-w-full mq800:gap-[29px]">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[287px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-[24px] mq450:leading-[29px] mq800:text-[32px] mq800:leading-[38px]">
            Pick Your Pricing
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[287px] max-w-full text-[16px]">
          <div className="self-stretch relative leading-[150%]">
            We understand that each project is unique. That's why our pricing
            model is designed to flex with your requirements.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPricing;
