import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="text-dark-green mx-6 md:mx-10 flex h-16 items-center border-b-[6px] justify-between">
      <Link to={"/"} className="md:text-2xl font-bold">
        Deskdot
      </Link>
      <div className="md:text-lg md:*:ml-9 *:ml-7">
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
