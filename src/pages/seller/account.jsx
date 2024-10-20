import SideBarSeller from "../../components/seller/sidebarSeller";
import NavBarSeller from "../../components/seller/navbar";
import ProfileMenuSeller from "../../components/seller/profileMenuSeller";
import LoginInfo from "../../components/account/loginInfo";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

export default function AccountSeller() {
  const loaderData = useLoaderData();

  const { setLogin, user } = useContext(AuthContext);
  const { profile } = loaderData;

  useEffect(() => {
    if (
      loaderData?.accessToken &&
      loaderData?.accessToken !== user?.accessToken
    ) {
      const updatedUser = { ...user, accessToken: loaderData.accessToken };
      setLogin(updatedUser);
    }
  }, [loaderData?.accessToken, user?.accessToken, setLogin]);

  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBarSeller />
      <div className="items-start md:flex">
        <div>
          <div className="my-10 flex items-center justify-between md:my-0 md:block">
            <LoginInfo profile={profile} />
            <ProfileMenuSeller />
          </div>
          <SideBarSeller />
        </div>

        <div className="w-full md:ml-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
