import ProfileComponent from "../../components/protected/ProfileComponent";
import SideBar from "../../components/protected/Sidebar/SideBar";

const Profile = ({username, onSignOut }) => {
  return (
    <div className="w-full relative bg-white flex flex-row items-start justify-start  box-border gap-[105px] leading-[normal] tracking-[normal] mq750:gap-[26px] mq750:pl-5 mq750:pr-5 mq750:box-border mq1125:gap-[52px]">
      {/* <div className="h-[1080px] w-64 relative bg-white box-border overflow-hidden shrink-0 border-r-[2px] border-solid border-gainsboro-100 mq750:hidden">
        <div className="absolute top-[40px] left-[32px] w-32 h-[30px] overflow-hidden hidden" />
      </div> */}
      <SideBar onSignOut={onSignOut}/>
      <div className="w-[768px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-[calc(100%_-_361px)] shrink-0 mq750:pt-9 mq750:box-border mq750:max-w-full">
        <ProfileComponent username={username}/>
      </div>
    </div>
  );
};

export default Profile;