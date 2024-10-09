import { NavLink, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation().pathname;
  const pattern = /shop\/+/i;
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
        className={
          !location.match(pattern) ? "text-medium-blue" : "text-dark-green"
        }
        to={"/shop"}
      >
        Shop
      </NavLink>
      {location.includes("seller") ? (
        <>
          <p>/</p>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-medium-blue" : "text-dark-green"
            }
            to={"/sellers"}
          >
            Sellers
          </NavLink>
        </>
      ) : (
        <></>
      )}
      {location.match(pattern) ? (
        <>
          <p>/</p>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-medium-blue" : "text-dark-green"
            }
            to={"."}
          >
            {location.split("/").splice(-1)[0]}
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
