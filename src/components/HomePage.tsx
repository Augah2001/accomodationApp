import { GridItem, Show } from "@chakra-ui/react";
import HouseGrid from "./HouseGrid";
import SideLocationPanel from "./SideLocationPanel";
import { Outlet, useOutletContext } from "react-router-dom";
import { ContextText } from "./Layout";
import {useState} from 'react'




const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>()
  const { houses, isOpen, handleClose } = useOutletContext<ContextText>();
  
  const filteredHouses = selectedLocation? houses?.filter(house =>house.location === selectedLocation): houses

  


  return (
    <>
      <GridItem
        className="main"
        paddingX={10}
        paddingY={5}
        marginY={4}
        area={"main"}
      >
        <Outlet context={{ isOpen, handleClose }} />
        <HouseGrid houses={filteredHouses} />
      </GridItem>
      <Show above="md">
        <GridItem padding={3} w={"40%"} marginY={4} area={"aside"}>
          <SideLocationPanel setSelectedLocation={setSelectedLocation } />
        </GridItem>
      </Show>
    </>
  );
};

export default HomePage;


