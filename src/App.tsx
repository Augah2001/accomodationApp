import "./App.css";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SideLocationPanel from "./components/SideLocationPanel";
import HouseGrid from "./components/HouseGrid";

function App() {
  return (
    <>
      <Grid
        paddingX={3}
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem paddingY={3} marginTop={2} area="nav">
          {" "}
          <Navbar />
        </GridItem>
        <GridItem
          className="main"
          paddingX={10}
          paddingY={5}
          marginY={4}
          area={"main"}
        >
          <HouseGrid />
        </GridItem>
        <Show above="md">
          <GridItem padding={3} w={"40%"} marginY={4} area={"aside"}>
            <SideLocationPanel />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
