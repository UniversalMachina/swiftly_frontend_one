import SettingComponent from "../../components/protected/SettingComponent";
import SideBar from "../../components/protected/Sidebar/SideBar";
import React, { useState, useEffect } from "react";
import {
  PasswordChangePopup,
  DeleteAccountPopup,
  EmailChangePopup,
} from "../../components/protected//SettingsPopup";

const Settings = ({ username, setUsername, onSignOut }) => {
  const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);
  const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  return (
    <div className="w-full relative bg-white flex flex-row items-start justify-start py-0 box-border gap-[102px] leading-[normal] tracking-[normal]">
      {/* <div className="ml-[-358px] h-[1080px] w-64 relative bg-white box-border overflow-hidden shrink-0 border-r-[2px] border-solid border-gainsboro-100">
        <div className="absolute top-[40px] left-[32px] w-32 h-[30px] overflow-hidden hidden" />
      </div> */}
      <SideBar onSignOut={onSignOut}/>
      <div className="w-[768px] flex flex-col items-start justify-start pt-[70px] px-0 pb-0 box-border max-w-full mq800:pt-[45px] mq800:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[66px] max-w-full mq450:gap-[16px] mq800:gap-[33px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-1 px-0 pb-[5px] border-b-[1px] border-solid border-gainsboro-200">
          <div
            className="w-48 text-[22px] font-poppins bg-transparent h-7 leading-9 text-gray-800 flex items-center p-0 mq450:text-2xl mq450:leading-7"
          >
            Account
          </div>
          </div>

          <div className="w-[700px] overflow-x-auto flex flex-col items-start justify-start gap-[3px] max-w-full">
            <SettingComponent
              label="Email Address"
              pg="Change your email address"
              change="Change"
              propBackground="linear-gradient(90deg, #e052a0, #f15c41)"
              propColor="#000"
              func={() => setEmailPopupOpen(true)}
            />
            <SettingComponent
              label="Password"
              pg="Change your passowrd"
              change="Change"
              propBackground="linear-gradient(90deg, #e052a0, #f15c41)"
              propColor="#000"
              func={() => setPasswordPopupOpen(true)}
            />
            <SettingComponent
              label="Deletion"
              pg="Permanently delete your account, posts, and comments."
              change="Delete"
              propBackground="linear-gradient(90deg, #e052a0, #f15c41)"
              propColor="#000"
              func={() => setDeletePopupOpen(true)}
            />

            <DeleteAccountPopup
              isOpen={isDeletePopupOpen}
              onClose={() => setDeletePopupOpen(false)}
              username={username}
            />

            <PasswordChangePopup
              isOpen={isPasswordPopupOpen}
              onClose={() => setPasswordPopupOpen(false)}
              username={username}
            />
            <EmailChangePopup
              isOpen={isEmailPopupOpen}
              onClose={() => setEmailPopupOpen(false)}
              username={username}
              setUsername={setUsername}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
