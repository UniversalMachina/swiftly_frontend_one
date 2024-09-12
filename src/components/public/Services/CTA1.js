import React, { useState } from "react";

const contentData = {
  title: "Discover Stammer",
  description:
    "Unlock valuable insights and get real-time assistance with BestBuy's top inventory directly through email.",
};

const CTA1 = () => {
  const [email, setEmail] = useState(""); // State to hold the email input
  const [message, setMessage] = useState(""); // State to hold the message displayed after submit

  const handleInputChange = (event) => {
    setEmail(event.target.value); // Update the email state on every input change
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    if (email) {
      // Check if email is not empty
      setMessage("Thank you for subscribing!"); // Set the thank you message
      setTimeout(() => setMessage(""), 3000); // Remove the message after 3 seconds
    } else {
      setMessage("Please enter a valid email address."); // Set the error message if email is empty
      setTimeout(() => setMessage(""), 3000); // Remove the message after 3 seconds
    }
  };

  return (
    <section className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-[149.3px] pb-[149.4px] pr-[85px] pl-[85.3px] box-border bg-[url('/public/cta--4@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 z-[1] text-left text-[48px] text-black font-poppins mq825:gap-[27px_106.7px] mq825:py-[97px] mq825:px-[21px] mq825:box-border mq1450:gap-[53px_106.7px] mq1450:pl-[42px] mq1450:pr-[42px] mq1450:box-border">
      <div className="w-[1024px] flex flex-col items-start justify-start gap-[21.3px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] shrink-0 mq825:gap-[16px_32px]">
          <h1 className="m-0 self-stretch h-[154px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-[29px] mq450:leading-[35px] mq825:text-[38px] mq825:leading-[46px]">
            {contentData.title}
          </h1>
          <div className="self-stretch h-9 relative text-[18px] leading-[150%] inline-block">
            {contentData.description}
          </div>
        </div>
        <form
          className="w-[684px] flex flex-col items-start justify-start pt-[21.4px] px-0 pb-0 box-border gap-[21.3px] max-w-full shrink-0 text-[12px]"
          onSubmit={handleSubmit}
        >
          <div className="self-stretch h-16 flex flex-row items-start justify-start gap-[21.3px] max-w-full">
            <input
              className="flex-1 bg-white box-border text-black text-[16px] flex flex-row items-center justify-start py-[24px] pr-[13px] pl-4 max-w-[calc(100%_-_161px)] border-[1.3px] border-solid border-black"
              placeholder="Your Email Address"
              type="email" // Ensuring we use the correct type for email inputs
              value={email}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="cursor-pointer py-4 bg-black h-[67px] px-[20px] box-border flex flex-row items-center justify-center whitespace-nowrap border-[1.3px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-darkslategray-100"
            >
              <div className="relative text-[21.3px] leading-[32px] font-poppins text-white text-left">
                Subscribe Now
              </div>
            </button>
          </div>
          <div className="self-stretch h-6 relative leading-[150%] inline-block">
            By subscribing, you agree to our Terms and Conditions.
          </div>
          {message && <div className="text-red-500">{message}</div>}
        </form>
      </div>
    </section>
  );
};

export default CTA1;
