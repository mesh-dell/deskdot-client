import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="hidden w-1/6 space-y-20 text-dark-green md:block">
      <div className="flex flex-col space-y-12 font-semibold">
        <Link to={"/account"}>My Account</Link>
        <Link to={"/account/orders"}>Orders</Link>
        <Link to={"/account/settings"}>Settings</Link>
      </div>

      <button className="rounded-md bg-light-green px-6 py-2 font-semibold">
        Log Out
      </button>
    </div>
  );
}
