import { Box, Image, Show } from "@chakra-ui/react";

import { house } from "../Services/getHouses";
import { Link, useLocation } from "react-router-dom";
import useModal from "../hooks/useModal";
import { useEffect } from "react";

interface Props {
  houses: house[] | null;
  id: string | undefined;
  isOpen: boolean;
  setPath: React.Dispatch<React.SetStateAction<String | "">>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const PictureBlocks = ({ setIsOpen, houses, id, isOpen, setPath }: Props) => {
  const house = houses?.find((house) =>
    id ? house.houseNumber === parseInt(id) : null
  );

  



  const { pathname } = useLocation();

  useEffect(() => {
    setPath(pathname);
  }, []);

  return (
    <Box borderRadius="5px" width="100%" display="flex" flexDirection="row">
      <Box w={{ base: "100%", md: "67.4%" }} minH="60px">
        <Link to={`/${id}/view`}>
          <Image
            className="IMG"
            onClick={() => {
              setIsOpen(true)
              // <ModalTemplate headerText="view" Node={LoginForm}/>
            }}
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
