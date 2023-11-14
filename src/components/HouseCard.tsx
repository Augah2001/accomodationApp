import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { house } from "../Services/getHouses";
import image from "../assets/no-image-placeholder.webp";
import { Link } from "react-router-dom";

interface Props {
  house: house;
  index: number;
}

const HouseCard = ({ house, index }: Props) => {
  return (
    <>
      <Link to={`/${house.houseNumber}`}>
        <Card
          _hover={{ transform: "scale(1.02)" }}
          transition="transform 0.3s"
          overflow="hidden"
          bg="#00021d"
          borderRadius="8px"
          boxShadow={
            index % 2 === 0 ? "1px 0px 3px #805ad5" : "1px 0px 3px green"
          }
          
        >
          <Image src={image} />
          <CardBody>
            <Heading fontSize="">{house.description}</Heading>
          </CardBody>

          <Box key={house.houseNumber} display="flex" flexDirection="row">
            <Box
              width={"50%"}
              h="2px"
              bgGradient={
                index % 2 === 0
                  ? "linear(to-r, transparent, purple.600)"
                  : "linear(to-r, transparent,  green.600)"
              }
            ></Box>
            <Box
              width={"50%"}
              h="2px"
              bgGradient={
                index % 2 === 0
                  ? "linear(to-r, purple.600 ,transparent)"
                  : "linear(to-r, green.600 ,transparent)"
              }
            ></Box>
          </Box>
        </Card>
      </Link>
    </>
  );
};

export default HouseCard;
