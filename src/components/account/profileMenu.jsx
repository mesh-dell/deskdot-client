import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function ProfileMenu() {
  return (
    <div className="md:hidden">
      <Menu>
        <MenuButton as={Button} colorScheme="teal">
          Profile
        </MenuButton>
        <MenuList>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Orders</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
