import { useMemo } from "react";

const Content = ({ iconEnvelope, heading, text, link }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[22.4px] min-w-[223px] max-w-[284px] text-left text-[29px] text-black font-Roboto">
      <img
        className="w-[44.8px] h-[44.8px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={iconEnvelope}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[22.4px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14.9px]">
          <b className="self-stretch relative leading-[39px] mq450:text-[24px] mq450:leading-[31px]">
            {heading}
          </b>
          <div className="relative text-[14.9px] leading-[150%]">{text}</div>
        </div>
        <div className="self-stretch relative text-[14.9px] [text-decoration:underline] leading-[150%] whitespace-nowrap">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Content;
