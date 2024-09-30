import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="text-dark-green mx-10 flex h-16 items-center justify-between border-b-[6px]">
      <Link to={"/"} className="text-2xl font-bold">
        Deskdot
      </Link>
      <div className="text-lg *:ml-9">
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
