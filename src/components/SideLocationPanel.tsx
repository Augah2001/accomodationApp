import { Box, Button, Heading, List, ListItem, filter } from "@chakra-ui/react";
import { getLocations } from "../Services/getLocations";
import { useEffect, useState } from "react";
import axios from "axios";
interface Props {
  setSelectedLocation: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface LocationType{
  name: string;
  id:number,
  distance: string | null,
 
  
}



const SideLocationPanel = ({ setSelectedLocation }: Props) => {
  const [locations, setLocations] = useState<LocationType[]>([])


  useEffect(()=> {

    axios.get<LocationType[]>('http://127.0.0.1:443/api/locations/')
    .then((res)=> {
      console.log(res.data)
      setLocations([{name: "Any", id: 0, distance: null},...res.data ])})
    .catch((error)=> console.log(error))
  
  }, [])

  return (
    <Box minW={"250px"}>
      <Box display="flex" flexDirection="row">
        <Box
          width={"50%"}
          h="2px"
          bgGradient="linear(to-r, transparent,  pink.600, purple.700)"
        ></Box>
        <Box
          width={"50%"}
          h="2px"
          bgGradient="linear(to-r, purple.700 ,transparent)"
        ></Box>
      </Box>

      <Box
        minH="100vh"
        paddingTop={3}
        minW={"100%"}
        minHeight="300px"
        boxShadow="0px 0px 2px #805ad5"
        borderRadius={5}
        bgGradient="linear-gradient(to-r, #0d001e, , #00021d)"
      >
        <Heading marginLeft={4} fontSize="3xl" color="rgb(249 38 174)">
          {" "}
          Location{" "}
        </Heading>
        <List marginTop={4}>
          {locations.map((location) => (
            <ListItem
              _selected={{ fontSize: "2xl" }}
              key={location.id}
              _hover={{ bg: "purple.600" }}
              color={"white"}
              paddingLeft={4}
              paddingTop={2}
              height={"40px"}
              borderRadius={3}
              onClick={() => setSelectedLocation(location.name)}
            >
              <Button variant={"link"}>{location.name}</Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideLocationPanel;
