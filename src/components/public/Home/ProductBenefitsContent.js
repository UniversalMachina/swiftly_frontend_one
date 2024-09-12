import BenefitDescriptionContent from "./BenefitDescriptionContent";
import PropTypes from "prop-types";

const ProductBenefitsContent = ({ className = "", benefits }) => {
  return (
    <div
      className={`w-[1849px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-[48px] text-customGray-1300 font-poppins ${className}`}
    >
      <div className="w-[1641px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1700:flex-wrap mq1700:justify-center">
        {benefits.map((content, index) => (
          <BenefitDescriptionContent
            key={index}
            heading={content.heading}
            description={content.description}
          />
        ))}
      </div>
    </div>
  );
};

ProductBenefitsContent.propTypes = {
  className: PropTypes.string,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductBenefitsContent;
