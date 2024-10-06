import SideBar from "../../components/account/sidebar";
import NavBar from "../../components/home/navbar";
import ProfileMenu from "../../components/account/profileMenu";
import LoginInfo from "../../components/account/loginInfo";
import { Outlet } from "react-router-dom";

export default function Account() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <div className="items-start md:flex">
        <div>
          <div className="my-10 flex items-center justify-between md:my-0 md:block">
            <LoginInfo />
            <ProfileMenu />
          </div>
          <SideBar />
        </div>

        <div className="w-full md:ml-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
