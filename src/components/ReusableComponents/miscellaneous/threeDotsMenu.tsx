import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

// Inside your component

interface Props {
  menuItems: { label: string; value: any }[];
}

const ThreeDotsMenu = ({ menuItems}: Props) => {
  return (
    <Menu>
      <MenuButton
        color="pink.600"
        boxShadow="0px 0px 2px #805ad5"
        as={IconButton}
        aria-label="More server options"
        icon={<BsThreeDotsVertical />}
        variant="solid"
        w="fit-content"
      />
      <MenuList>
        {menuItems.map((item, index) => (
          <Link to={item.value} key={index}>
            <MenuItem value={item.value} key={index} >
              {item.label}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ThreeDotsMenu;
