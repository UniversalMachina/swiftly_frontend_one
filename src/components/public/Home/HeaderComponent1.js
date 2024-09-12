import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent1 = () => {
  const navigate = useNavigate();

  const contentData = {
    introText: "Elevate Your Sales with Stammer",
    mainTitle: "Transform Customer Engagement with AI-Powered Chatbots",
    description:
      "Stammer delivers smart, accurate responses to customer queries by leveraging Best Buy's vast data. Enhance user satisfaction through real-time interactions.",
  };

  return (
    <div className="pt-[60px] w-full">
      <div className="self-stretch flex flex-row items-start justify-center pb-[40px] box-border max-w-full">
        <div className="w-[330px] rounded-[10px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[7px] whitespace-nowrap max-w-full border-[1px] border-solid border-customGray-700">
          {contentData.introText}
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[29px] box-border max-w-full text-center text-[64px] text-black font-poppins">
        <h1 className="m-0 w-[1111px] relative text-inherit font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-[38px] mq925:text-[51px]">
          {contentData.mainTitle}
        </h1>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[55px] box-border max-w-full text-center text-[20px] text-customGray-1100 font-poppins">
        <div className="w-[756px] relative inline-block shrink-0 max-w-full mq450:text-[16px]">
          {contentData.description}
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[159px] box-border max-w-full">
        <div className="w-[521px] flex flex-row flex-wrap items-start justify-center gap-[35px] max-w-full mq925:gap-[17px]">
          <button
            className="cursor-pointer py-4 pr-[29px] pl-8 rounded-[20px] bg-customColor-300 flex-1 rounded-[10px]-3 box-border overflow-hidden flex flex-row items-start justify-start min-w-[158px] whitespace-nowrap border-[0.9px] border-solid border-customGray-700 hover:bg-customColor-150 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-customColor-150"
            onClick={() => navigate("/contact-us")}
          >
            <div className="flex-1 relative text-[20px] font-medium font-poppins text-white text-center">
              Book A Call
            </div>
          </button>
          <button
            className="cursor-pointer py-4 pr-[29px] pl-8 rounded-[20px] bg-[transparent] flex-1 rounded-[10px]-3 box-border overflow-hidden flex flex-row items-start justify-start min-w-[158px] border-[0.9px] border-solid border-customGray-700 hover:bg-customGray-200 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-customGray-900"
            onClick={() => navigate("/services")}
          >
            <div className="flex-1 relative text-[20px] font-medium font-poppins text-customGray-1100 text-center mq450:text-[16px]">
              View Services
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeaderComponent1;
