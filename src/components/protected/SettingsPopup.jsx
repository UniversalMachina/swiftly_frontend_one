import React, { useState } from "react";
import axios from "axios";

const SettingsModel = () => {
  return <div>SettingsModel</div>;
};

const PasswordChangePopup = ({ isOpen, onClose, username }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      console.log("New passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/change-password`,
        {
          username,
          current_password: currentPassword,
          new_password: newPassword,
        }
      );
      console.log(response.data.message);
      onClose();
    } catch (error) {
      console.log(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-transparent absolute inset-0"></div>
      <div className="w-full max-w-md rounded-md bg-white shadow-lg flex flex-col items-center justify-between p-6 gap-5 text-left text-lg text-gray-800 font-poppins z-10">
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        <div className="flex flex-col w-full gap-4">
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
            className="py-3 px-4 w-[93%] rounded-md text-sm font-poppins text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customColor-300 focus:border-transparent"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="py-3 px-4 w-[93%] rounded-md text-sm font-poppins text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customColor-300 focus:border-transparent"
          />
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirm New Password"
            className="py-3 px-4 w-[93%] rounded-md text-sm font-poppins text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customColor-300 focus:border-transparent"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            onClick={handlePasswordChange}
            className="cursor-pointer py-3 px-5 rounded-md font-semibold font-poppins text-sm text-center bg-gradient-to-r from-[#e052a0] to-[#f15c41] text-white transition duration-300 ease-in-out hover:shadow-lg"
          >
            Change Password
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer py-3 px-5 rounded-md font-semibold font-poppins text-sm text-center bg-white border border-gray-300 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const DeleteAccountPopup = ({ isOpen, onClose, username }) => {
  const [passwordForDeletion, setPasswordForDeletion] = useState("");

  const handleAccountDeletion = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/delete-account`,
        {
          username,
          password: passwordForDeletion,
        }
      );
      console.log(response.data.message);
      onClose();
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
      } else {
        console.log("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-transparent absolute inset-0"></div>
      <div className="w-full max-w-md rounded-md bg-white shadow-lg flex flex-col items-center justify-between p-6 gap-5 text-left text-lg text-gray-800 font-poppins z-10">
        <h2 className="text-2xl font-bold mb-4">Confirm Account Deletion</h2>
        <input
          type="password"
          value={passwordForDeletion}
          onChange={(e) => setPasswordForDeletion(e.target.value)}
          placeholder="Password for deletion"
          className="py-3 px-4 w-full rounded-md text-sm font-poppins text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customColor-300 focus:border-transparent"
        />
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            onClick={handleAccountDeletion}
            className="cursor-pointer py-3 px-5 rounded-md font-semibold font-poppins text-sm text-center bg-gradient-to-r from-[#e052a0] to-[#f15c41] text-white transition duration-300 ease-in-out hover:shadow-lg"
          >
            Confirm Deletion
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer py-3 px-5 rounded-md font-semibold font-poppins text-sm text-center bg-white border border-gray-300 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const EmailChangePopup = ({ isOpen, onClose, username, setUsername }) => {
  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (newEmail) => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/change_email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        current_username: username,
        new_email: newEmail,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 400) {
          throw new Error("Email already exists.");
        } else if (response.status === 404) {
          throw new Error("User not found.");
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log(data.message);
        onClose();
        setUsername(newEmail);
        localStorage.setItem("username", newEmail);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
        setEmailError(error.message);
      });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(newEmail)) {
      handleEmailChange(newEmail);
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-transparent absolute inset-0"></div>
      <div className="w-full max-w-md rounded-md bg-white shadow-lg flex flex-col items-center justify-between p-6 gap-5 text-left text-lg text-gray-800 font-poppins z-10">
        <h2 className="text-2xl font-bold mb-4">Update Email</h2>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Enter new email"
          className="py-3 px-4 w-full rounded-md text-sm font-poppins text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customColor-300 focus:border-transparent"
        />
        {emailError && <div className="text-red-500 mt-2">{emailError}</div>}
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            onClick={handleSubmit}
            className="cursor-pointer py-3 px-5 rounded-md font-semibold font-poppins text-sm text-center bg-gradient-to-r from-[#e052a0] to-[#f15c41] text-white transition duration-300 ease-in-out hover:shadow-lg"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer py-3 px-5 rounded-md font-semibold font-poppins text-sm text-center bg-white border border-gray-300 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export {
  EmailChangePopup,
  SettingsModel,
  PasswordChangePopup,
  DeleteAccountPopup,
};
