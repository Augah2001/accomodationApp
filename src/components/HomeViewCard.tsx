import { Card, CardBody, Heading } from "@chakra-ui/react";
import PictureBlocks from "./PictureBlocks";
import { house } from "../Services/getHouses";
import GradientDiv from "./ReusableComponents/GradientDiv";

interface Props {
  houses: house[] | null;
  id: string | undefined;
}

const HomeViewCard = ({ houses, id }: Props) => {
  return (
    <>
      <Card bg="#00021d">
        <PictureBlocks id={id} houses={houses} />
        <CardBody boxShadow="1px 1px 1px #805ad5" borderBottomRadius={5}>
          <Heading></Heading>
        </CardBody>
      </Card>
      <GradientDiv width="100%" />
    </>
  );
};

export default HomeViewCard;
