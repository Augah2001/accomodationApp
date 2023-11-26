import { Heading } from "@chakra-ui/react";
import HouseGrid from "./HouseGrid";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import Button from "./ReusableComponents/miscellaneous/Button";
import { ContextText } from "../hooks/useGetPageData";

const LandlordPage = () => {
  const {
    setHouses,
    houses,
    isLogged,
    setIsLogged,
    setIsOpen,
    setPath,
    isOpen,
    handleClose,
    setUser,
    user,
  } = useOutletContext<ContextText>();

  const newHouses = houses?.filter((house) => house.owner.id === user._id);
  console.log(houses);
  return (
    <>
      <Heading marginBottom={5}>Overview</Heading>
      <Link to="/me/my-assets/add">
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
        }}
      />

      <HouseGrid
        setHouses={setHouses}
        houses={newHouses}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default LandlordPage;
