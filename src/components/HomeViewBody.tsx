import {
  Box,
  CardBody,
  HStack,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  VStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ButtonRegular from "./ReusableComponents/miscellaneous/Button";
import { house } from "../Services/getHouses";
import { moreDetails } from "./HomeViewCard";
import { Link } from "react-router-dom";

interface Props {
  house: house | undefined;
  moreDetails: moreDetails;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string | undefined;
}

const HomeViewBody = ({ house, moreDetails, setIsOpen, id }: Props) => {
  return (
    <CardBody boxShadow="1px 1px 1px #805ad5" borderBottomRadius={5}>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={"column"}
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.200", "gray.600")}
          />
        }
      >
        <Box as={"header"}>
          <HStack justifyContent="space-between">
            <Heading
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
              marginY={2}
            >
              {house?.location.name}
            </Heading>
            <Link to={`/${id}/pay`}>
              <ButtonRegular
                label="CLAIM"
                handleClick={() => setIsOpen(true)}
              />
            </Link>
          </HStack>

          <Text fontWeight={300} fontSize={"2xl"}>
            {`capacity: ${house?.price}`}
          </Text>
          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            fontSize={"2xl"}
          >
            ${house?.price}
          </Text>
        </Box>

        <VStack spacing={{ base: 4, sm: 6 }}>
          <Box fontSize={"lg"} display={"flex"} flexDirection={"row"}>
            <Text color={useColorModeValue("yellow.500", "yellow.300")}>
              {"Description: \n"}
            </Text>{" "}
            <Text fontSize={"lg"}> {house?.description}</Text>
          </Box>
        </VStack>
        <Box>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            color={useColorModeValue("yellow.500", "yellow.300")}
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            Services
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <List spacing={2}>
              {house?.services.map((service, index) => (
                <ListItem key={index}>{service}</ListItem>
              ))}
            </List>
          </SimpleGrid>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            color={useColorModeValue("yellow.500", "yellow.300")}
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            More Details
          </Text>
          <List spacing={2}>
            {Object.keys(moreDetails).map((key, index) => (
              <ListItem key={index}>
                <HStack>
                  <Text as={"span"} fontWeight={"bold"}>{`${key}: `}</Text>
                  <Text>{`${moreDetails[key]}`}</Text>
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </CardBody>
  );
};

export default HomeViewBody;
