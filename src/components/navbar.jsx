import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="text-dark-green mx-6 md:mx-10 flex md:h-16 h-14 items-center md:border-b-[6px] border-b-4 justify-between">
      <Link to={"/"} className="md:text-2xl font-bold">
        Deskdot
      </Link>
      <div className="md:text-lg md:*:ml-9 *:ml-9">
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
