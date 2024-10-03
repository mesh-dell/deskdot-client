import SideBar from "../components/account/sidebar";
import NavBar from "../components/home/navbar";
import ProfileMenu from "../components/account/profileMenu";
import LoginInfo from "../components/account/loginInfo";
import PersonalInfo from "../components/account/personalInfo";
import RecentOrders from "../components/account/recentOrders";

export default function Account() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />

      <div className="md:flex items-start">
        <div>
          <div className="flex items-center justify-around md:block my-10 md:my-0">
            <LoginInfo />
            <ProfileMenu />
          </div>
          <SideBar />
        </div>

        <div className="md:ml-20 w-full">
          <PersonalInfo />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
