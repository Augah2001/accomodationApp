import "./App.css";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import SideLocationPanel from "./SideLocationPanel";



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
        <GridItem area="main">main</GridItem>
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
