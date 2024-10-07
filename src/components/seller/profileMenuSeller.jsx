import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProfileMenuSeller() {
  return (
    <div className="md:hidden">
      <Menu>
        <MenuButton as={Button} colorScheme="teal">
          Profile
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={"/account/seller"}>My Account</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/account/seller/orders"}>Orders</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/account/seller/products"}>Products</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/account/seller/settings"}>Settings</Link>
          </MenuItem>
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
