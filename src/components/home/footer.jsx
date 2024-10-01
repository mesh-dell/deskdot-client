import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="justify-evenly space-y-7 text-center text-dark-green *:space-y-3 md:flex md:space-y-0 md:text-left">
      <div>
        <h1 className="text-xl font-semibold">About Us</h1>
        <h2>DeskDot provides top-quality office supplies.</h2>
      </div>

      <div>
        <h1 className="text-xl font-semibold">Account</h1>
        <ul className="space-y-3">
          <li>
            <Link>My Account</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Register</Link>
          </li>
          <li>
            <Link>Explore Sellers</Link>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold">Seller</h1>
        <ul className="space-y-3">
          <li>
            <Link>My Account</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
