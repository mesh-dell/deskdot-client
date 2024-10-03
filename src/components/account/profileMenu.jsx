import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
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
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
