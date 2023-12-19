import { GridItem, Show } from "@chakra-ui/react";
import HouseGrid from "./HouseGrid";
import SideLocationPanel from "./SideLocationPanel";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { ContextText } from "../hooks/useGetPageData";
import { Spinner } from "@chakra-ui/react";

const HomePage = () => {
  const {
    setHouses,
    setPath,
    houses,
    isOpen,
    handleClose,
    setSelectedLocation,
    isLoading,
    setIsOpen,
    user,
  
    setUser
    
  } = useOutletContext<ContextText>();
  

  const { pathname } = useLocation();
  

  return (
    <>
      <GridItem
        className="main"
        paddingX={2.5}
        paddingY={5}
        marginY={4}
        area={"main"}
      >
        <Outlet
          context={{
            setPath,
            isOpen,
            handleClose,
            setIsOpen,
            setUser,
           
            user,
            houses
          }}
        />

        {
          <HouseGrid
            isLoading = {isLoading}
            setHouses={setHouses}
            setIsOpen={setIsOpen}
            houses={houses}
            user = {user}
          />
        }
      </GridItem>
      {pathname && (
        <Show above="md">
          <GridItem padding={3} w={"40%"} marginY={4} area={"aside"}>
            <SideLocationPanel setSelectedLocation={setSelectedLocation} />
          </GridItem>
        </Show>
      )}
    </>
  );
};

export default HomePage;
