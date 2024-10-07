import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="flex h-14 items-center justify-between border-b-4 border-dark-green text-dark-green md:h-16 md:border-b-[6px]">
      <Link to={"/"} className="font-bold md:text-2xl">
        Deskdot
      </Link>
      <div className="*:ml-9 md:text-lg md:*:ml-9">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/account"}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to={"/cart"}>
          <FontAwesomeIcon icon={faBagShopping} />
        </Link>
      </div>
    </div>
  );
}
