import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { useNavigate } from "react-router-dom";
import useGoogleLogin from "../../../hooks/useGoogleLogin";
import { Link } from "react-router-dom";

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add this line for error handling
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const plan = "";
  const clientId =
    "375057981851-n2rb0fp5v5rh3fde74b8t3tl7lacqnvr.apps.googleusercontent.com";
  const { handleGoogleLogin } = useGoogleLogin(
    clientId,
    plan,
    username,
    onLogin
  );

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\@\"]{2,})$/i;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setUsername(inputEmail);

    // Validate email and set error message
    if (!validateEmail(inputEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(""); // Clear error message when valid
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const { username, account_subscription } = response.data;
        console.log("Login response data:", response.data); // Debugging line

        onLogin(true, username);
        console.log(username);

        if (account_subscription) {
          console.log("Navigating to job dashboard"); // Debugging line
          navigate("/dashboard");
        } else {
          console.log("Navigating to subscriptions page"); // Debugging line
          navigate("/dashboard");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
      onLogin(false);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-[35%] h-full bg-white">
        <div className="flex flex-col items-start justify-start max-w-full text-left text-black p-[80px]">
          <div className="flex flex-col self-stretch items-start justify-start p-0 max-w-full">
            <div className="font-poppins mt-[60px] mb-[10px] font-semibold text-[28px]">
              Welcome Back!
            </div>
            <div className="font-poppins font-medium mb-[30px] text-[14px] text-gray-500">
              To continue with this service sign in with Google
            </div>

            <div className="flex flex-col items-center justify-center pt-[3px] px-0 pb-0 box-border w-full">
              <button
                onClick={handleGoogleLogin}
                className="cursor-pointer p-[7px] border-gray-400 bg-[transparent] w-full rounded-[5px] overflow-hidden flex flex-row items-center justify-center border-[1.3px] border-solid border-muted"
              >
                <div className="flex-1 flex flex-row items-center justify-center py-0 px-[19px] gap-[13px]">
                  <img
                    className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/icons8google-1.svg"
                  />
                  <div className="relative text-[15px] font-medium font-poppins text-black text-center">
                    Sign In with Google
                  </div>
                </div>
              </button>
            </div>

            <div className="flex flex-row items-center justify-center w-full my-[40px]">
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="px-[10px] text-gray-500 text-[14px] font-medium">
                or
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="m-0 self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full"
          >
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[25px]">
              <div className=" flex self-stretch flex-col items-start justify-start text-left text-[17.5px] text-black font-poppins">
                <div className="flex flex-row items-start justify-start py-2">
                  Email*
                </div>
                <div className="self-stretch h-10 rounded-[5px] mt-[5px] box-border overflow-hidden flex flex-row items-start justify-start py-[10px] pl-[12.5px] border-gray-400 border-[1px] border-solid bg-white">
                  <input
                    className="flex-grow font-poppins outline-none font-medium text-[12.5px] bg-white"
                    placeholder="Email"
                    type="email"
                    value={username}
                    onChange={handleEmailChange}
                  />
                </div>
                {emailError && (
                  <div className="font-medium text-[12.5px] text-red-600 pt-5">
                    {emailError}
                  </div>
                )}

                <div className="flex flex-row items-start justify-start py-2">
                  Password*
                </div>
                <div className="self-stretch h-10 rounded-[5px] mt-[5px] box-border overflow-hidden flex flex-row items-start justify-start py-[10px] pl-[12.5px] border-gray-400 border-[1px] border-solid bg-white">
                  <input
                    className="flex-grow font-poppins outline-none font-medium text-[12.5px] bg-white"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex mb-[40px] flex-row items-center justify-start py-0 pr-5 pl-0 gap-[8px]">
                <input
                  className="m-0 h-[12.3px] w-[11.3px] relative rounded-10xs-5 box-border border-[1.3px] border-solid border-white"
                  type="checkbox"
                />
                <div className="relative text-[11.3px] font-medium font-poppins text-black text-left">
                  {`I agree to the `}
                  <span className="[text-decoration:underline]">
                    {`terms & policy`}
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm mb-2">{error}</div>
            )}

            <button
              type="submit"
              className="cursor-pointer border-none p-0 rounded-[18px] bg-customColor-300 self-stretch h-11 relative max-w-full flex items-center justify-center"
            >
              <span className="absolute text-[16px] font-poppins text-white text-left z-10 px-2 py-1">
                Sign In
              </span>
            </button>
          </form>

          <div className="self-stretch flex flex-col items-center justify-start text-[17.5px]">
            <div className="flex items-start justify-start pl-2 box-border]">
              <div className="flex items-center justify-center">
                <div className="font-sans font-semibold whitespace-pre-wrap my-[20px]">
                  <span>{`Don't have an account? `}</span>
                  <Link
                    to="/register"
                    className="text-[18px] text-customColor-300 no-underline"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="w-[65%] h-full bg-customGray-200">
        {/* Second box content */}
      </div>
    </div>
  );
};

export default LoginComponent;
