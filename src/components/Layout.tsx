import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { house} from "../Services/getHouses";
import useRouteTemplating from "../hooks/usetRouteTemplating";
import useModal from "../hooks/useModal";

import useGetPageData from "../hooks/useGetPageData";

export type ContextText = {
  houses: house[];
  setHouses: () => void;
  isOpen: boolean;
  handleClose: () => void;
};

const Layout = () => {
  const { currentTemplateAreas, currentTemplateColumns } = useRouteTemplating();
  const { isOpen, handleOpen, handleClose } = useModal();
  
  const {
    setSearchQuery,
    houses,
    setHouses,
    selectedPriceRange,
    handlePriceChange,
    handleSearchChange,
    searchQuery,
  } = useGetPageData()

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
          />
        </GridItem>
        <Outlet context={{ houses, setHouses, isOpen, handleClose }} />
      </Grid>
    </>
  );
};

export default Layout;
