import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBarSeller() {
  return (
    <div className="flex h-14 items-center justify-between border-b-4 border-dark-green text-dark-green md:h-16 md:border-b-[6px]">
      <Link to={"/"} className="font-bold md:text-2xl">
        Deskdot
      </Link>
      <div className="*:ml-9 md:text-lg md:*:ml-9">
        <Link to={"/"}>Home</Link>

        <Link to={"/account/seller"}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}
