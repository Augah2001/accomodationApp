import { Box, SimpleGrid } from "@chakra-ui/react";

import { house } from "../Services/getHouses";
import HouseCard from "./HouseCard";

interface Props {
  houses: house[] | undefined;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHouses: React.Dispatch<React.SetStateAction<house[] | undefined>>;
}

const HouseGrid = ({
  houses,
  setIsLogged,
  isLogged,
  setIsOpen,
  setHouses,
}: Props) => {
  const handleDelete = (house: house) => {
    const newHouses = houses?.filter((item) => item !== house);
    setHouses(newHouses);
    console.log(houses);
  };
  return (
    <Box>
      <SimpleGrid marginTop={2} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {houses?.map((house, index) => (
          <HouseCard
            onDelete={handleDelete}
            setIsOpen={setIsOpen}
            setIsLogged={setIsLogged}
            isLogged={isLogged}
            index={index}
            house={house}
            key={house.houseNumber}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HouseGrid;
