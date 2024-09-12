import React, { useState, useEffect } from "react";
import axios from "axios";

const Input = ({ name, value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-[11.2px] border-[0.9px] border-solid border-black bg-white text-[14.9px] leading-[150%] text-black min-w-[207px] max-w-full"
    />
  );
};

export default Input;
