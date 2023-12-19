import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import { house } from "../Services/getHouses";
import HouseCard from "./HouseCard";
import apiClient from "../Services/apiClient";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { User } from "./Layout";

interface Props {
  houses: house[] | undefined;
  user: User
  isLoading: boolean
 
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHouses: React.Dispatch<React.SetStateAction<house[] | undefined>>;
}

const HouseGrid = ({
  isLoading,
  houses,
  user,
  setIsOpen,
  setHouses,
}: Props) => {
  console.log(isLoading)
  const toast = useToast();
  const navigate = useNavigate();

  const handleDelete = (house: house) => {



    apiClient.delete(`/houses/${house._id}`)
      .then(res => {
        console.log(res)
        toast({title: "deleted"})
        apiClient.get('/houses').then(res1 => setHouses(res1.data)).catch(err1=> toast({title: err1.response.data}))
        navigate('/my-assets')
      }).catch((err: AxiosError)=> toast({title: err.message}))
  
  };
  return (
    
    <>
    {isLoading && <Box>waDII</Box>}
    <Box>
      {houses?.length !==0?<SimpleGrid marginTop={2} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {houses?.filter(item=> item.capacity- item.occupied >= 0).map((house, index) => (
          <HouseCard
            onDelete={handleDelete}
            setIsOpen={setIsOpen}
            user = {user}
            index={index}
            house={house}
            key={house.houseNumber}
          />
        ))}
      </SimpleGrid>: <Text>No houses found</Text>}
    </Box>
    </>
  );
};

export default HouseGrid;
