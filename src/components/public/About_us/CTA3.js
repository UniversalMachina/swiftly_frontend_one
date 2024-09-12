import React, { useState } from "react";

const CTA3 = () => {
  const [email, setEmail] = useState(''); // State to hold the email input
  const [message, setMessage] = useState(''); // State to hold the message displayed after submit

  const handleInputChange = (event) => {
    setEmail(event.target.value); // Update the email state on every input change
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    if (email) { // Check if email is not empty
      setMessage('Thank you for signing up!'); // Set the thank you message
      setTimeout(() => setMessage(''), 3000); // Remove the message after 3 seconds
    } else {
      setMessage('Please enter a valid email address.'); // Set the error message if email is empty
      setTimeout(() => setMessage(''), 3000); // Remove the message after 3 seconds
    }
  };

  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[149.3px] pb-[149.4px] pr-[85px] pl-[85.3px] shrink-0 text-left text-[44.8px] text-black font-poppins mq450:gap-[27px_106.7px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[97px] mq750:pb-[97px] mq750:box-border mq1050:gap-[53px_106.7px] mq1050:pl-[42px] mq1050:pr-[42px] mq1050:box-border">
      <div className="w-[716.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[14.9px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[22.4px] shrink-0">
          <b className="self-stretch relative leading-[54px] mq450:text-[27px] mq450:leading-[32px] mq1050:text-[36px] mq1050:leading-[43px]">
            Join our Early Access Program
          </b>
          <div className="self-stretch relative text-[16px] leading-[150%]">
            Be the first to experience our upcoming features and enhancements.
          </div>
        </div>
        <form className="w-[478.8px] flex flex-col items-start justify-start pt-[14.9px] px-0 pb-[0.1px] box-border gap-[14.9px] max-w-full shrink-0 text-[12px]" onSubmit={handleSubmit}>
          <div className="self-stretch h-[44.4px] flex flex-row items-start justify-start gap-[14.9px] max-w-full">
            <div className="h-[46px] flex-1 bg-white box-border flex flex-row items-center justify-start p-[11.2px] max-w-[calc(100%_-_113px)] border-[0.9px] border-solid border-black">
              <input
                className="w-full [border:none] [outline:none] font-poppins text-[14.9px] bg-[transparent] h-[22px] flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[207px] max-w-full p-0"
                placeholder="Enter your email"
                type="email" // Correcting the input type to "email" for proper validation
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="cursor-pointer py-[11.2px] pr-[23px] pl-[23.1px] bg-black h-[46px] box-border flex flex-row items-center justify-center whitespace-nowrap border-[0.9px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[14.9px] leading-[150%] font-poppins text-white text-left inline-block min-w-[50px]">
                Sign up
              </div>
            </button>
          </div>
          <div className="self-stretch h-12 relative leading-[150%] inline-block">
            By signing up, you confirm that you agree with our Terms and Conditions.
          </div>
          {message && <div className="text-red-500">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default CTA3;
