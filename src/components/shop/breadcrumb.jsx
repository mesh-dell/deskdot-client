import { NavLink } from "react-router-dom";

export default function BreadCrumb() {
  return (
    <div className="flex items-center justify-center space-x-3 text-dark-green md:text-xl md:font-semibold">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-medium-blue" : "text-dark-green"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <p>/</p>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-medium-blue" : "text-dark-green"
        }
        to={"/shop"}
      >
        Shop
      </NavLink>
    </div>
  );
}
