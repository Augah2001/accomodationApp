import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import PictureBlocks from "./PictureBlocks";
import { house } from "../Services/getHouses";
import GradientDiv from "./ReusableComponents/miscellaneous/GradientDiv";
import ButtonRegular from "./ReusableComponents/miscellaneous/Button";
import HomeViewBody from "./HomeViewBody";

interface Props {
  houses: house[] | [];
  id: string | undefined;
  isOpen: boolean;
  setPath: React.Dispatch<React.SetStateAction<String | "">>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface moreDetails {
  curfew: boolean | null;
  houseNumber: number | null;
  distance: string | null;
  [key: string]: string | boolean | number | null;
}

const HomeViewCard = ({ setIsOpen, houses, id, isOpen, setPath }: Props) => {
  const house = houses?.find((house) =>
    id ? house.houseNumber === parseInt(id) : null
  );

  const moreDetails: moreDetails = {
    curfew: null,
    houseNumber: null,
    distance: "",
  };

  for (let key1 in house) {
    for (let key2 in moreDetails) {
      if (key1 === key2) {
        moreDetails[key2] = house[key1];
      }
    }
  }

  const ones = [];

  // const newThing = Object.keys(moreDetails).map(key => )
  // console.log(newThing)

  return (
    <>
      <Card bg="#00021d">
        <PictureBlocks
          setIsOpen={setIsOpen}
          setPath={setPath}
          isOpen={isOpen}
          id={id}
          houses={houses}
        />
        <HomeViewBody
          id={id}
          setIsOpen={setIsOpen}
          moreDetails={moreDetails}
          house={house}
        />
      </Card>
      <GradientDiv width="100%" />
    </>
  );
};

export default HomeViewCard;
