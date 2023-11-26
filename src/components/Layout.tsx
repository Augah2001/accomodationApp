import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

import useRouteTemplating from "../hooks/useRouteTemplating";
import useModal from "../hooks/useModal";


export interface User {
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  _id: string;
}

import useGetPageData from "../hooks/useGetPageData";



const Layout = () => {
  const [user, setUser] = useState<User>();

  const [isLogged, setIsLogged] = useState(false);

  const { currentTemplateAreas, currentTemplateColumns } = useRouteTemplating();
  const { isOpen, handleOpen, handleClose, path, setPath, setIsOpen } =
    useModal();

  const {
    setSearchQuery,
    filteredHouses: houses,
    selectedLocation,
    setSelectedLocation,
    setHouses,
    selectedPriceRange,
    handlePriceChange,
    handleSearchChange,
    searchQuery,
  } = useGetPageData();

  return (
    <>
      <Grid
        paddingX={3}
        templateAreas={currentTemplateAreas}
        templateColumns={currentTemplateColumns}
      >
        <GridItem paddingY={3} marginTop={2} area="nav">
          {" "}
          <Navbar
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            handleOpen={handleOpen}
            setSearchQuery={setSearchQuery}
            houses={houses}
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
            handlePriceChange={handlePriceChange}
            selectedPriceRange={selectedPriceRange}
            setPath={setPath}
            setIsOpen={setIsOpen}
            user={user}
            setUser={setUser}
          />
        </GridItem>
        <Outlet
          context={{
            isLogged: isLogged,
            setIsLogged: setIsLogged,
            setPath,
            houses,
            path,
            setHouses,
            isOpen,
            handleClose,
            setIsOpen,
            selectedLocation,
            setSelectedLocation,
            setUser,
            user,
          }}
        />
      </Grid>
    </>
  );
};

export default Layout;
