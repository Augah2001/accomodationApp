import { Show, GridItem } from "@chakra-ui/react";
import React from "react";
import HomeViewCard from "./HomeViewCard";
import { house } from "../Services/getHouses";
import { useOutletContext, useParams } from "react-router-dom";
import { ContextText } from "./Layout";


 


const HouseViewPage = () => {

  


  const [houses, setHouses] = useOutletContext<ContextText>()

  const {id} = useParams<{id: string | undefined}>();
  

  return (
    <>
      <Show above="lg">
        <GridItem paddingTop={5} area="leftSide">
          
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem paddingTop={5} area="rightSide"></GridItem>
      </Show>

      <GridItem paddingTop={5} paddingRight={5} paddingLeft={5} area="main">
        <HomeViewCard houses={houses} id={id} />
      </GridItem>
    </>
  );
};

export default HouseViewPage;
