import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  const { setLogout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      refreshToken: user.refreshToken,
      role: "buyer",
    };
    logout(payload);
    setLogout();
    navigate("/");
  };

  return (
    <div className="md:hidden">
      <Menu>
        <MenuButton as={Button} colorScheme="teal">
          Profile
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={"/account"}>My Account</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/account/orders"}>Orders</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/account/settings"}>Settings</Link>
          </MenuItem>
          <MenuItem onClick={handleClick}>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
