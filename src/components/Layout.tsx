import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { house } from "../Services/getHouses";
import useRouteTemplating from "../hooks/usetRouteTemplating";
import useModal from "../hooks/useModal";

import useGetPageData from "../hooks/useGetPageData";

export type ContextText = {
  houses: house[];
  setHouses: () => void;
  isOpen: boolean;
  handleClose: () => void;
  setPath: React.Dispatch<React.SetStateAction<String | "">>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  selectedLocation: string | "";
  setSelectedLocation: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Layout = () => {
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
            handleOpen={handleOpen}
            setSearchQuery={setSearchQuery}
            houses={houses}
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
            handlePriceChange={handlePriceChange}
            selectedPriceRange={selectedPriceRange}
            setPath={setPath}
            setIsOpen = {setIsOpen}
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
          }}
        />
      </Grid>
    </>
  );
};

export default Layout;
