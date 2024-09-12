import React, { useState } from "react";
import Input from "./Input";

const Contact3 = () => {
  const [name, setName] = useState(''); // State for the name input
  const [email, setEmail] = useState(''); // State for the email input
  const [message, setMessage] = useState(''); // State for the message text
  const [confirmationMessage, setConfirmationMessage] = useState(''); // State for the confirmation message after form submission
  const [acceptTerms, setAcceptTerms] = useState(false); // State for the checkbox

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    if (name && email && message && acceptTerms) {
      setConfirmationMessage('Thank you for contacting us. We will get back to you soon!');
      setTimeout(() => setConfirmationMessage(''), 5000); // Clear the confirmation message after 5 seconds
    } else {
      setConfirmationMessage('Please fill all fields and agree to the terms.');
      setTimeout(() => setConfirmationMessage(''), 5000);
    }
  };

  const handleCheckboxChange = () => {
    setAcceptTerms(!acceptTerms); // Toggle the acceptTerms state
  };

  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[149.3px] pb-[149.4px] pr-[85px] pl-[85.3px] shrink-0 text-left text-black font-poppins mq450:gap-[27px_106.7px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[97px] mq750:pb-[97px] mq750:box-border mq1050:gap-[53px_106.7px] mq1050:pl-[42px] mq1050:pr-[42px] mq1050:box-border">
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col items-start justify-center gap-[29.9px] min-w-[535px] shrink-0">
        <div className="self-stretch flex flex-col items-start justify-center gap-[14.9px]">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[81px] shrink-0">
            Get in touch
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22.4px] shrink-0 text-[44.8px]">
            <b className="self-stretch relative leading-[54px] shrink-0 mq825:text-[36px] mq825:leading-[43px] mq450:text-[27px] mq450:leading-[32px]">
              Contact Us
            </b>
            <div className="self-stretch relative text-[16px] leading-[150%] shrink-0">
              Have a question? We're here to help!
            </div>
          </div>
        </div>
        <Input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <textarea
          className="w-[576.8px] bg-white box-border flex flex-col items-start justify-start pt-[11.2px] px-[11.2px] pb-[11px] relative min-h-[170px] max-w-full shrink-0 text-black border-[0.9px] border-solid border-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
        />
        <label className="flex items-center text-[13.1px]">
          <input
            className="mr-2 h-[18.7px] w-[18.7px] box-border border-[0.9px] border-solid border-black"
            type="checkbox"
            checked={acceptTerms}
            onChange={handleCheckboxChange}
          />
          <span>I accept the Terms and Conditions</span>
        </label>
        <button className="cursor-pointer py-[11.2px] px-[22.2px] bg-black box-border flex flex-row items-start justify-start border-[0.9px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-darkslategray-100">
          <div className="relative text-[14.9px] leading-[150%] font-poppins text-white text-left inline-block min-w-[48px]">
            Submit
          </div>
        </button>
        {confirmationMessage && <div className="text-red-500">{confirmationMessage}</div>}
      </form>
    </div>
  );
};

export default Contact3;
