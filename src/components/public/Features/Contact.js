import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "./Content";

const Contact = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[149.3px] pb-[149.4px] pr-[610.2px] pl-[85.3px] box-border gap-[106.7px] max-w-full shrink-0 text-center text-[16px] text-black font-poppins lg:gap-[53px_106.7px] lg:pl-[42px] lg:pr-[305px] lg:box-border mq450:pt-[63px] mq450:pb-[63px] mq450:box-border mq825:gap-[27px_106.7px] mq825:py-[97px] mq825:pr-[152px] mq825:pl-[21px] mq825:box-border">
      <div className="w-[1024px] flex flex-col items-start justify-start gap-[21.3px] max-w-full">
        <div className="w-20 h-8 relative leading-[150%] font-semibold inline-block">
          Connect
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px] shrink-0 text-left text-[48px] mq825:gap-[16px_32px]">
          <h1 className="m-0 self-stretch h-[77px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-[29px] mq450:leading-[35px] mq825:text-[38px] mq825:leading-[46px]">
            Contact Us
          </h1>
          <div className="self-stretch h-9 relative text-[18px] leading-[150%] inline-block">
            Have a question or need support? Get in touch with us.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[31px] text-left text-[29px]">
        <Content
          iconEnvelope="/icon--envelope.svg"
          heading="Email"
          text="Drop us an email and we'll get back to you."
          link="support@business.com"
        />
        <Content
          iconEnvelope="/icon--messagedetail.svg"
          heading="Live Chat"
          text="Chat with our team in real-time for immediate assistance."
          link="Start a chat"
          propMinWidth="213px"
          propAlignSelf="stretch"
        />
        <Content
          iconEnvelope="/icon--phone.svg"
          heading="Phone"
          text="Give us a call if you prefer to speak directly."
          link="+1 (555) 123-4567"
          propMinWidth="213px"
          propAlignSelf="stretch"
        />
      </div>
    </section>
  );
};

export default Contact;
