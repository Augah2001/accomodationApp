import { Grid, GridItem, Show } from "@chakra-ui/react";
import { getHouses, house } from "./Services/getHouses";
import { useState } from "react";
import HomeViewCard from "./components/HomeViewCard";

const App1 = () => {
  const [houses, setHouses] = useState<house[]>(getHouses());
  return (
    <Grid
      textAlign="center"
      templateAreas={`"nav nav nav" "leftSide main rightSide"`}
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr",
        lg: "1fr 3fr 1fr",
      }}
    >
      <GridItem h="50" area="nav">
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area="leftSide">nav</GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="leftSide">nav</GridItem>
      </Show>

      <GridItem paddingRight={5} paddingLeft={5} area="main">
        <HomeViewCard houses={houses} />
      </GridItem>
    </Grid>
  );
};

export default App1;
