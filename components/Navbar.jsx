import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <Flex className="px-2 py-3 border border-gray-100 border-solid">
      <Box className="text-3xl to-blue-400 font-bold">
        <Link href={"/"} className="p-2 text-blue-400">
          Realtor
        </Link>
      </Box>
      <Spacer />

      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            color="red.400"
            className="outline hover:bg-gray-100 w-[38px] h-[38px] rounded-md border border-solid border-gray-200"
          />
          <MenuList className="border border-solid border-gray-200 py-2 rounded-md w-56">
            <Link href={"/"} passHref>
              <MenuItem
                className="py-2 px-3 hover:bg-gray-100"
                icon={<FcHome />}
              >
                Home
              </MenuItem>
            </Link>
            <Link href={"/search"} passHref>
              <MenuItem
                className="py-2 px-3 hover:bg-gray-100"
                icon={<BsSearch />}
              >
                Search
              </MenuItem>
            </Link>
            <Link href={"/search?purpose=for-sale"} passHref>
              <MenuItem
                className="py-2 px-3 hover:bg-gray-100"
                icon={<FcAbout />}
              >
                Buy Property
              </MenuItem>
            </Link>
            <Link href={"/search?purpose=for-rent"} passHref>
              <MenuItem
                className="py-2 px-3 hover:bg-gray-100"
                icon={<FiKey />}
              >
                Rent Property
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
