import { Box, Image, Show } from "@chakra-ui/react";

import { house } from "../Services/getHouses";
import { Link } from "react-router-dom";

interface Props {
  houses: house[] | null;
  id: string | undefined;
  
}

const PictureBlocks = ({ houses, id }: Props) => {
  const house = houses?.find((house) =>
    id ? house.houseNumber === parseInt(id) : null
  );

  // const handleImageClick = () => {
  //   return (

  //   );
  // };

  return (
    <Box borderRadius="5px" width="100%" display="flex" flexDirection="row">
      <Box w={{ base: "100%", md: "67.4%" }} minH="60px">
        <Link to={`/${id}/view`}>
          <Image
            // onClick={() => handleImageClick()}
            borderTopLeftRadius="5px"
            borderTopRightRadius={{ base: "5px", md: "0px" }}
            width="100%"
            src={house?.images[0]}
          />
        </Link>
      </Box>
      <Show above="md">
        <Box marginLeft="1px" width="33.6%" minH="60px">
          <Box width="100%" marginBottom="1px">
            {" "}
            <Image borderTopRightRadius="5px" src={house?.images[1]} />
          </Box>
          <Box width="100%">
            <Image src={house?.images[2]} />
          </Box>
        </Box>
      </Show>
    </Box>
  );
};

export default PictureBlocks;
