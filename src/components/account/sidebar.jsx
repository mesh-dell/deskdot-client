import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { logout } from "../../services/authService";


export default function SideBar() {
  const location = useLocation().pathname;

  const { setLogout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      refreshToken: user.refreshToken,
      role: "buyer",
    };
    logout(payload);
    setLogout();
    navigate("/");
  };
  return (
    <div className="hidden space-y-20 text-dark-green md:block">
      <div className="flex flex-col space-y-12 font-semibold">
        <NavLink
          className={() =>
            location == "/account" ? "border-b-2 border-dark-green" : ""
          }
          to={"/account"}
        >
          My Account
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-dark-green" : ""
          }
          to={"/account/orders"}
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-dark-green" : ""
          }
          to={"/account/settings"}
        >
          Settings
        </NavLink>
      </div>

      <button
        className="rounded-md bg-light-green px-6 py-2 font-semibold"
        onClick={handleClick}
      >
        Log Out
      </button>
    </div>
  );
}
