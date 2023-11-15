import { Box, Button, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/icons8-house-64.png";
import SerchInputGroup from "./ReusableComponents/SearchInputGroup";
import { Link } from "react-router-dom";
import { house } from "../Services/getHouses";

interface Props {
  handleOpen: () => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  houses: house[];
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar = ({
  handleSearchChange,
  houses,
  handleOpen,
  setSearchQuery,
  searchQuery,
}: Props) => {
  return (
    <>
      <HStack>
        <Link to="/">
          <Show above="md">
            <Box boxSize="50px">
              <Image src={logo} />
            </Box>
          </Show>
        </Link>

        <SerchInputGroup
          handleSearchChange={handleSearchChange}
          houses={houses}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
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
