import { GridItem, Show } from "@chakra-ui/react";
import HouseGrid from "./HouseGrid";
import SideLocationPanel from "./SideLocationPanel";
import { Outlet, useOutletContext } from "react-router-dom";
import { ContextText } from "./Layout";

const HomePage = () => {
  const { houses, isOpen, handleClose } = useOutletContext<ContextText>();
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
        <HouseGrid houses={houses} />
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
