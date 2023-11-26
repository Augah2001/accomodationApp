import {
  Badge,
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { house } from "../Services/getHouses";
import image from "../assets/no-image-placeholder.webp";
import { Link, useLocation } from "react-router-dom";

import { DeleteIcon } from "@chakra-ui/icons";

interface Props {
  house: house;
  index: number;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (house: house) => void;
}

const HouseCard = ({ house, index, isLogged, setIsOpen, onDelete }: Props) => {
  const { pathname } = useLocation();

  console.log(house.location);
  return (
    <>
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

        <HStack>
          <Link
            onClick={() => setIsOpen(true)}
            to={
              (pathname === "/me/my-assets" && `/${house.houseNumber}`) ||
              isLogged
                ? `/${house.houseNumber}`
                : "/login"
            }
          >
            {" "}
            <CardBody width="100%">
              <Heading
                marginY={3}
                fontSize=""
              >{`Area: ${house.location.name}`}</Heading>
              <Heading
                marginY={3}
                fontSize=""
              >{`Distance: ${house.distance}`}</Heading>

              <Heading marginY={3} fontSize="">
                <HStack justifyContent="space-between">
                  Price:{" "}
                  {
                    <Badge
                      paddingBottom={"3px"}
                      colorScheme="green"
                      fontSize="16px"
                      size="4xl"
                    >
                      ${house.price}
                    </Badge>
                  }
                </HStack>
              </Heading>

              {}
            </CardBody>
          </Link>
          {pathname === "/me/my-assets" && (
            <DeleteIcon
              marginLeft="46%"
              marginTop="13%"
              textAlign={"end"}
              boxSize={5}
              color="gray"
              _hover={{
                color: "red.400",
              }}
              _active={{ color: "red.700" }}
              onClick={() => {
                onDelete(house);
              }}
            />
          )}
        </HStack>

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
    </>
  );
};

export default HouseCard;
