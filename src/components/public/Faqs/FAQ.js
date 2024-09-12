import React from "react";
import { useNavigate } from "react-router-dom";

const contentData = [
  {
    title: "Frequently Asked Questions about Stammer and Its Features.",
    faq: [
      {
        title: "What Does Stammer Do?",
        body: "Stammer is an intelligent chatbot designed for Best Buy, providing answers to queries using company and inventory data.",
      },
      {
        title: "How Does It Function?",
        body: "Stammer’s easy-to-use interface allows you to ask questions and receive immediate responses based on up-to-date inventory and company data.",
      },
      {
        title: "Who Is It For?",
        body: "Stammer is perfect for both Best Buy customers and employees, streamlining the process of finding product information and support.",
      },
      {
        title: "What Are The Benefits?",
        body: "Enhance your shopping experience with Stammer. Get quick answers to your queries about products, availability, and more, all in one place.",
      },
      {
        title: "How To Begin?",
        body: "Start using Stammer by clicking the button on the page. Test our chatbot and see how it can assist you instantly.",
      },
    ],
  },
];

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-center pt-[149.3px] px-5 pb-[149.4px] box-border max-w-full shrink-0 text-left text-[51.2px] text-black font-poppins lg:pt-[97px] lg:pb-[97px] lg:box-border mq450:gap-[27px 106.7px] mq825:gap-[53px 106.7px] mq825:pt-[63px] mq825:pb-[63px] mq825:box-border">
      <div className="w-[1399.5px] flex flex-row items-start justify-start gap-[85.3px] max-w-full lg:flex-wrap mq450:gap-[85.3px 21px] mq825:gap-[85.3px 43px]">
        <div className="w-[533.3px] flex flex-col items-start justify-start gap-[34.1px] min-w-[533.3px] max-w-full lg:flex-1 mq825:gap-[17px_34.1px] mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[25.6px] shrink-0">
            <b className="self-stretch relative leading-[120%] mq450:text-12xl mq450:leading-[37px] mq825:text-22xl mq825:leading-[49px]">
              FAQs
            </b>
            <div className="self-stretch relative text-[20px] leading-[150%]">
              {contentData[0].title}
            </div>
          </div>
          <button
            className="cursor-pointer py-[12.8px] pr-[25.5px] text-[20px] pl-[25.4px] bg-[transparent] h-[54px] box-border flex flex-row items-center justify-center border-[1.1px] border-solid border-border-primary hover:bg-darkslategray-200 hover:box-border hover:border-[1.1px] hover:border-solid hover:border-darkslategray-100"
            onClick={() => navigate("/contact-us")}
          >
            <div className="relative text-mid-1 leading-[26px] font-text-tiny-normal text-border-primary text-left inline-block min-w-[60px]">
              Contact
            </div>
          </button>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[51.2px] min-w-[508px] max-w-full text-lgi-2 mq450:gap-[26px_51.2px] mq825:min-w-full">
          {contentData[0].faq.map((faq, index) => (
            <div
              key={index}
              className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[51.2px] min-w-[508px] max-w-full text-[18px] mq450:gap-[26px 51.2px] mq825:min-w-full"
            >
              <div className="self-stretch flex flex-col items-start justify-start gap-[17.1px] shrink-0">
                <b className="self-stretch relative leading-[29px]">
                  {faq.title}
                </b>
                <div className="self-stretch relative text-[17px] leading-[150%]">
                  {faq.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
