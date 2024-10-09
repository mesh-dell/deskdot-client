import { Link } from "react-router-dom";

export default function Footer({ isSeller }) {
  return (
    <div className="justify-evenly space-y-7 text-center text-dark-green *:space-y-3 md:flex md:space-y-0 md:text-left">
      <div>
        <h1 className="text-xl font-semibold">About Us</h1>
        <h2>DeskDot provides top-quality office supplies.</h2>
      </div>

      {!isSeller ? (
        <div>
          <h1 className="text-xl font-semibold">Account</h1>

          <ul className="space-y-3">
            <li>
              <Link to={"/account"}>My Account</Link>
            </li>
            <li>
              <Link to={"/signin"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Register</Link>
            </li>
            <li>
              <Link to={"/sellers"}>Explore Sellers</Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}

      <div>
        <h1 className="text-xl font-semibold">Seller</h1>
        <ul className="space-y-3">
          <li>
            <Link to={"/account/seller"}>My Account</Link>
          </li>
          <li>
            <Link to={"/signin/seller"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup/seller"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
