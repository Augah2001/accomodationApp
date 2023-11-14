import { Box, SimpleGrid } from "@chakra-ui/react";

import HouseCard from "./HouseCard";
import { house } from "../Services/getHouses";

interface Props {
  houses: house[] | null;
}

const HouseGrid = ({ houses }: Props) => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {houses?.map((house, index) => (
          <HouseCard index={index} house={house} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HouseGrid;
