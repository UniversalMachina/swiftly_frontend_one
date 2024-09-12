import PropTypes from "prop-types";

const BenefitDescriptionContent = ({ className = "", heading, description }) => {
  return (
    <div
      className={`w-[466px] flex flex-col items-start justify-start gap-[68px] max-w-full text-left text-[48px] text-customGray-1300 font-poppins mq900:gap-[34px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[40.7px] mq900:gap-[20px]">
        <img
          className="w-[68px] h-[73.3px] relative shrink-0 [debug_commit:69da668]"
          loading="lazy"
          alt=""
          src="/vector-14.svg"
        />
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit shrink-0 [debug_commit:69da668] mq450:text-[29px] mq900:text-[36px]">
          {heading}
        </h1>
      </div>
      <b className="w-[436px] h-[188px] relative text-[24px] leading-[200%] inline-block text-customGray-800 shrink-0 max-w-full mq450:text-[19px] mq450:leading-[38px]">
        {description}
      </b>
    </div>
  );
};

BenefitDescriptionContent.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitDescriptionContent;
