import { Box, Button, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/icons8-house-64.png";
import { Link, useLocation } from "react-router-dom";
import { house } from "../Services/getHouses";
import SearchInputGroup from "./ReusableComponents/SearchInputGroup";

interface Props {
  handleOpen: () => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  houses: house[];
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedPriceRange: string;
  handlePriceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Navbar = ({
  handleSearchChange,
  houses,
  handleOpen,
  setSearchQuery,
  searchQuery,
  handlePriceChange,
  selectedPriceRange,
}: Props) => {

  const {pathname} = useLocation()
  
  return (
    <>
      <HStack
        justifyContent={
          !(pathname === "/" || pathname === "/signup" || pathname === "/login")
            ? "space-between"
            : "center"
        }
      >
        <Link to="/">
          <Show above="md">
            <Box boxSize="50px">
              <Image src={logo} />
            </Box>
          </Show>
        </Link>

        {(pathname === "/" ||
          pathname === "/signup" ||
          pathname === "/login") && (
          <SearchInputGroup
            handleSearchChange={handleSearchChange}
            houses={houses}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handlePriceChange={handlePriceChange}
            selectedPriceRange={selectedPriceRange}
          />
        )}
        {(pathname === "/" ||
          pathname === "/signup" ||
          pathname === "/login") && (
          <Show above="md">
            <Link to="/signup">
              <Button
                bgGradient="linear(to-r, purple.700, #f926ae )"
                onClick={handleOpen}
                _hover={{ backgroundColor: "#000021" }}
              >
                {" "}
                JOIN
              </Button>
            </Link>
          </Show>
        )}
      </HStack>
      <Box marginTop={4} display="flex" flexDirection="row">
        <Box
          //   display="inline-block"
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
