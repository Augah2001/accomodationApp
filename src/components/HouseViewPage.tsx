import { Show, GridItem } from "@chakra-ui/react";
import HomeViewCard from "./HomeViewCard";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { ContextText } from "../hooks/useGetPageData";

const HouseViewPage = () => {
  const { houses, isOpen, handleClose, setPath, setIsOpen, setHouses } =
    useOutletContext<ContextText>();

  const { id } = useParams<{ id: string | undefined }>();

  return (
    <>
      <Show above="lg">
        <GridItem paddingTop={5} area="leftSide"></GridItem>
      </Show>
      <Show above="lg">
        <GridItem paddingTop={5} area="rightSide"></GridItem>
      </Show>

      <GridItem paddingTop={5} paddingRight={5} paddingLeft={5} area="main">
        <Outlet context={{ houses, setPath, isOpen, handleClose, id, setHouses }} />
        <HomeViewCard
          setIsOpen={setIsOpen}
          setPath={setPath}
          isOpen={isOpen}
          houses={houses}
          id={id}
        />
      </GridItem>
    </>
  );
};

export default HouseViewPage;
