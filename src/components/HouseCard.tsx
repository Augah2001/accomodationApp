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
import { User } from "./Layout";

interface Props {
  house: house;
  index: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (house: house) => void;
  user: User
}

const HouseCard = ({ house, user, index, setIsOpen, onDelete }: Props) => {
  const { pathname } = useLocation();


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

        <Box display= "flex" flexDirection= "row" >
          <Box width= "80%" >
          <Link
            onClick={() => setIsOpen(true)}
            to={
        
              user
                ? `/${house.houseNumber}`
                : "/login"
            }
          >
            {" "}
            <CardBody >
              <Heading
                marginY={3}
                fontSize=""
              >{`Area: ${house.location.name}`}</Heading>
              <Heading
                marginY={3}
                fontSize=""
              >{`Distance: ${parseInt(house.distance)/1000}km`}</Heading>

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

          </Box>
          
          <Box  paddingTop= "80px">
          {(pathname === "/my-assets" ) && (
            <DeleteIcon
              
              
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
            
          </Box>
          
        </Box>

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
