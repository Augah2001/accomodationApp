import { GridItem, Show } from "@chakra-ui/react";
import HouseGrid from "./HouseGrid";
import SideLocationPanel from "./SideLocationPanel";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";

import { useEffect } from "react";
import { ContextText } from "../hooks/useGetPageData";

const HomePage = () => {
  const {
    setHouses,
    setPath,
    houses,
    isOpen,
    handleClose,
    setSelectedLocation,
    isLogged,
    setIsOpen,
    setIsLogged,
    user,
    setUser,
  } = useOutletContext<ContextText>();

  const { pathname } = useLocation();
  useEffect(() => {
    pathname === "/me" && setIsLogged(true);
  });

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
            isLogged,
            setIsLogged,
            setUser,
            user,
          }}
        />

        {
          <HouseGrid
            setHouses={setHouses}
            setIsOpen={setIsOpen}
            setIsLogged={setIsLogged}
            isLogged={isLogged}
            houses={houses}
          />
        }
      </GridItem>
      {pathname !== "/me/my-assets" && (
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
