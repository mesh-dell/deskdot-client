import SideBar from "../../components/account/sidebar";
import NavBar from "../../components/home/navbar";
import ProfileMenu from "../../components/account/profileMenu";
import LoginInfo from "../../components/account/loginInfo";
import { Outlet, useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

export default function Account() {
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
      <NavBar />
      {profile ? (
        <div className="items-start md:flex">
          <div>
            <div className="my-10 flex items-center justify-between md:my-0 md:block">
              <LoginInfo profile={profile} />
              <ProfileMenu />
            </div>
            <SideBar />
          </div>

          <div className="w-full md:ml-20">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="text-center text-light-grey">
          Only registered users can access dashboard.
        </div>
      )}
    </div>
  );
}
