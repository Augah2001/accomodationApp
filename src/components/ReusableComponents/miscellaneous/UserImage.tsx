import { Menu, MenuButton, MenuList, MenuItem, Image, Heading } from "@chakra-ui/react";
import { forwardRef } from "react";
import userImage from '../../../assets/user_image placaeholder.jpeg'
import { Link } from "react-router-dom";

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

interface Props {
  menuItems: any,
  heading: string
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ onClick, children }, ref) => {
    return (
      <button ref={ref} onClick={onClick}>
        {children}
      </button>
    );
  }
);

const UserImage = ({ menuItems, heading}: Props) => {
  return (
    <Menu >
      <MenuButton  as={CustomButton}  w="fit-content">
        <Image  borderRadius={"18px"} src={userImage} />
      </MenuButton>
      <MenuList>
      <Heading as= "h6" fontSize= "20px" textAlign= "center" color= "pink.500">{heading}</Heading>
      {menuItems.map((item:  { label: string; value: string; }, index: number) => (
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

export default UserImage;