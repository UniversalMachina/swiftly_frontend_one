import { useMemo } from "react";

const Content2 = ({ iconEnvelope, heading, dataContainer, link }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[14.9px] text-left text-[14.9px] text-black font-Roboto">
      <img
        className="w-[31px] h-[31px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={iconEnvelope}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[7.5px] shrink-0">
        <b className="self-stretch relative text-[18px] leading-[140%]">
          {heading}
        </b>
        <div className="self-stretch relative leading-[150%]">
          {dataContainer}
        </div>
        <div className="self-stretch relative [text-decoration:underline] leading-[150%] whitespace-nowrap">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Content2;
