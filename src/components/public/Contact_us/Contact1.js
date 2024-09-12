import React from "react";
import { useNavigate } from "react-router-dom";
import Content2 from "./Content2";

const Contact1 = () => {
  return (
    <footer className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center pt-[149.3px] px-5 pb-[149.4px] gap-[106.7px] shrink-0 z-[1] text-center text-[14.9px] text-black font-poppins mq450:gap-[27px_106.7px] mq750:gap-[53px_106.7px] mq750:pb-[63px] mq750:box-border mq1050:pb-[97px] mq1050:box-border">
      <div className="w-[1230.7px] flex flex-col items-start justify-start gap-[14.9px] max-w-full">
        <div className="w-14 relative leading-[150%] font-semibold inline-block min-w-[56px] shrink-0">
          Connect
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[22.4px] shrink-0 text-left text-[44.8px]">
          <b className="self-stretch relative leading-[54px] mq450:text-[27px] mq450:leading-[32px] mq1050:text-[36px] mq1050:leading-[43px]">
            Get in Touch
          </b>
          <div className="self-stretch relative text-[16px] leading-[150%]">
            Have a question or need more information? Contact us!
          </div>
        </div>
      </div>
      <div className="w-[1224.5px] flex flex-row items-start justify-start gap-[74.7px] max-w-full text-left mq450:gap-[74.7px_19px] mq750:gap-[74.7px_37px] mq1050:flex-wrap">
        <div className="w-[373.3px] flex flex-col items-start justify-start gap-[37.3px] min-w-[373.3px] max-w-full mq450:gap-[19px_37.3px] mq450:min-w-full mq1050:flex-1">
          <Content2
            iconEnvelope="/icon--envelope1.svg"
            heading="Email"
            dataContainer="Send us an email"
            link="hello@business.com"
          />
          <Content2
            iconEnvelope="/icon--phone1.svg"
            heading="Phone"
            dataContainer="Give us a call"
            link="+1 (555) 123-4567"
          />
        </div>
        <img
          className="h-[481.6px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[504px] mq750:min-w-full"
          alt=""
          src="/placeholder-image-7@2x.png"
        />
      </div>
    </footer>
  );
};

export default Contact1;
