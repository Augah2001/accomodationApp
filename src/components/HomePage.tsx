import { GridItem, Show } from "@chakra-ui/react";
import React from "react";
import HouseGrid from "./HouseGrid";
import Navbar from "./Navbar";
import SideLocationPanel from "./SideLocationPanel";
import { useOutletContext } from "react-router-dom";
import { ContextText } from "./Layout";

const HomePage = () => {


  const [houses, setHouses] = useOutletContext<ContextText>()
  return (
    <>
      <GridItem
        className="main"
        paddingX={10}
        paddingY={5}
        marginY={4}
        area={"main"}
      >
        <HouseGrid houses = {houses} />
      </GridItem>
      <Show above="md">
        <GridItem padding={3} w={"40%"} marginY={4} area={"aside"}>
          <SideLocationPanel />
        </GridItem>
      </Show>
    </>
  );
};

export default HomePage;
