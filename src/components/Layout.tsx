import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

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
  
  const {pathname} = useLocation()
 
  

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
    user,
    setUser
  } = useGetPageData();

  console.log(user)  

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
