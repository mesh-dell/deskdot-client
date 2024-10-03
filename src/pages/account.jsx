import SideBar from "../components/account/sidebar";
import NavBar from "../components/home/navbar";
import ProfileMenu from "../components/account/profileMenu";
import LoginInfo from "../components/account/loginInfo";

export default function Account() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <div className="flex items-center justify-around md:block">
        <LoginInfo />
        <ProfileMenu />
      </div>
      <SideBar />
    </div>
  );
}
