import { GridItem, Heading } from "@chakra-ui/react";
import HouseGrid from "./HouseGrid";
import { Link, Outlet, useLocation, useOutletContext } from "react-router-dom";
import Button from "./ReusableComponents/miscellaneous/Button";
import { ContextText } from "../hooks/useGetPageData";


const LandlordPage = () => {
  const {
    houses,
    setHouses,
    isLogged,
    setIsLogged,
    setIsOpen,
    setPath,
    isOpen,
    handleClose,
    setUser,
    user,
  } = useOutletContext<ContextText>();

  const newHouses =  houses?.filter((house) => house.owner._id === user._id);

  
  const pathname = useLocation();
  

  return (
    <>
      <GridItem
        className="main"
        paddingX={2.5}
        paddingY={5}
        marginY={4}
        area={"main"}
      >
        <Heading marginBottom={5}>Overview</Heading>
        <Link to="/my-assets/add">
          <Button
            label="Add"
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </Link>
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
            pathname,
            houses,
            setHouses,
          }}
        />

        <HouseGrid
        user={user}
          setHouses={setHouses}
          houses={newHouses}
          setIsOpen={setIsOpen}
        />
      </GridItem>
    </>
  );
};



export default LandlordPage;
