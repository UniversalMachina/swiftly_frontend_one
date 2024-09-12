import { useMemo } from "react";

const SettingComponent = ({
  label,
  pg,
  change,
  propBackground,
  propColor,
  func,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const changeStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="w-[700px] rounded-md bg-customGray-100 box-border flex flex-row items-start justify-between py-6 pr-6 pl-5 gap-5 text-left text-lg text-gray-800 font-poppins border border-solid border-customGray-200">
      <div className="flex flex-col items-start justify-start gap-1.5">
        <div className="relative font-semibold inline-block min-w-[79px]">
          {label}
        </div>
        <div className="relative text-gray-400 inline-block min-w-[35px]">
          {pg}
        </div>
      </div>
      <div className="w-20 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <button
          className="cursor-pointer border-none py-2.5 pr-3.5 pl-3.5 bg-transparent self-stretch rounded-md shadow-sm flex flex-row items-start justify-start"
          style={buttonStyle}
          onClick={func}
        >
          <div
            className="flex-1 relative text-base font-semibold font-poppins text-gray-800 text-center inline-block min-w-[51.7px]"
            style={changeStyle}
          >
            {change}
          </div>
        </button>
      </div>
    </div>
  );
};

export default SettingComponent;
