import { Card } from "@chakra-ui/react";
import PictureBlocks from "./PictureBlocks";
import { house } from "../Services/getHouses";
import GradientDiv from "./ReusableComponents/miscellaneous/GradientDiv";
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
