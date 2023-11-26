import { Box, Button, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/icons8-house-64.png";
import { Link, useLocation } from "react-router-dom";
import { house } from "../Services/getHouses";
import SearchInputGroup from "./ReusableComponents/search/SearchInputGroup";
import { useEffect, useState } from "react";
import ButtonRegular from "./ReusableComponents/miscellaneous/Button";
import ThreeDotsMenu from "./ReusableComponents/miscellaneous/threeDotsMenu";
import UserImage from "./ReusableComponents/miscellaneous/UserImage";
import { User } from "./Layout";
import axios from "axios";

interface Props {
  handleOpen: () => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  houses: house[];
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedPriceRange: string;
  handlePriceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
  isLogged: boolean,
  user: User
  setUser: React.Dispatch<React.SetStateAction<User >>
}

const Navbar = ({
  handleSearchChange,
  houses,
 
  setSearchQuery,
  searchQuery,
  handlePriceChange,
  selectedPriceRange,
  setPath,
  setIsOpen,
  isLogged,
  user,
  setUser
}: Props) => {

  const [heading, setHeading] = useState<string>("")

  
  const { pathname } = useLocation();

  useEffect(()=> {
    user && axios.get<User>(`http://localhost:443/api/users/${user._id}`)
  .then(res => setHeading(res.data.firstName))
  }, [user])

  useEffect(() => {
    setPath(pathname);
  }, []);

  const threeDotsMenuItems = [
    { label: "home", value: "/" },
    {label: "join", value: "/signup"},
    { label: "contact", value: "/contact" },
    { label: "about", value: "/about" }
    
  ];

  const imageMenuItems = [
    {label: "My assets", value: "me/my-assets"},
    {label: "signout", value: "/signout"},
    {label: "gifts", value: "#"}
  ]
  

  const handleClick = () => {
    setPath(pathname);
    setIsOpen(true);
  };

  console.log(isLogged)

 

  return (
    <>
      <HStack
        minH={"65px"}
        justifyContent={
          !(pathname === "/" || pathname === "/signup" || pathname === "/login")
            ? "space-between"
            : "center"
        }
      >
        <Show below="sm">
          <ThreeDotsMenu menuItems={threeDotsMenuItems} />
        </Show>

        <Link to={isLogged? "/me": "/"}>
          <Show above="md">
            <Box boxSize="50px">
              <Image src={logo} />
            </Box>
          </Show>
        </Link>

        {(pathname === "/" ||
          pathname === "/signup" ||
          pathname === "/login" ||
          pathname === "/me") && (
          <SearchInputGroup
            handleSearchChange={handleSearchChange}
            houses={houses}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handlePriceChange={handlePriceChange}
            selectedPriceRange={selectedPriceRange}
          />
        )}
        { (!isLogged) && (
          
            <Show above="md">
              <Link to="/signup">
                <ButtonRegular handleClick={handleClick} label="JOIN" />
              </Link>
            </Show>
            
          
        )}
        {isLogged && <Box
              boxSize="48px"
              borderRadius="50%"
              paddingTop={{ base: "8px", md: "6px", lg: "4px" }}
            >
             <UserImage heading= {heading}  menuItems={imageMenuItems} />
            </Box>}
      </HStack>
      <Box marginTop={4} display="flex" flexDirection="row">
        <Box
          w="50%"
          h="2px"
          bgGradient="linear-gradient(to right, transparent, pink.500)"
        />
        <Box
          w="50%"
          h="2px"
          bgGradient="linear-gradient(to right, pink.500, transparent)"
        />
      </Box>
    </>
  );
};

export default Navbar;
