import React from "react";
import { useNavigate } from "react-router-dom";
const contentData = {
  testimonialText:
    "Stammer has transformed our customer service with its intuitive chatbot. It accurately handles inquiries about Best Buy products, improving response times and customer satisfaction.",
  person: {
    name: "Jane Doe",
    title: "Head of Customer Support, Best Buy",
    imageSrc: "/avatar-image@2x.png",
  },
};

const Testimonial = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start pt-[149.3px] px-5 pb-[149.4px] box-border max-w-full shrink-0 text-center text-[32px] text-black font-poppins lg:gap-[53px_106.7px] mq450:pt-[97px] mq450:pb-[97px] mq450:box-border mq825:gap-[27px_106.7px]">
      <div className="w-[1024px] overflow-hidden flex flex-col items-center justify-start gap-[42.7px] max-w-full mq825:gap-[21px_42.7px]">
        <img
          className="w-[186.7px] h-[74.7px] relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/logo2-colordark.svg"
        />
        <h1 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-[18px] mq450:leading-[27px] mq825:text-[26px] mq825:leading-[36px]">
          {contentData.testimonialText}
        </h1>
        <div className="w-[400px] flex flex-col items-center justify-start gap-[21.3px] max-w-full text-[21.3px]">
          <img
            className="w-[74.7px] h-[74.7px] relative rounded-[50%] object-cover"
            alt=""
            src={contentData.person.imageSrc}
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch h-8 relative leading-[150%] font-semibold inline-block mq450:text-[17px] mq450:leading-[26px]">
              {contentData.person.name}
            </div>
            <div className="self-stretch h-8 relative leading-[150%] inline-block mq450:text-[17px] mq450:leading-[26px]">
              {contentData.person.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
