import { useEffect, useState } from "react";
import useSearchHouses from "./useSearchHouses";
import useSelectHouse from "./useSelectHouse";
import useHouseLocation from "./useHouseLocation";
import useFetchHouses from "./useFetchHouses";
import { house } from "../Services/getHouses";
import { User } from "../components/Layout";
import {jwtDecode} from 'jwt-decode'

export type ContextText = {
  houses: house[];
  setHouses: React.Dispatch<React.SetStateAction<house[] | undefined>>
  isOpen: boolean;
  handleClose: (path: string) => void;
  setPath: React.Dispatch<React.SetStateAction<String | "">>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string | undefined>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const useGetPageData = () => {
  const [user, setUser] = useState<User>();

  
  
  const {data: houses, setData: setHouses} = useFetchHouses()

  useEffect(()=> {
   try {const jwt: any = localStorage.getItem('token')
    const user: User = jwtDecode(jwt)

   setUser(user)
   console.log(user)}
   catch (ex) {}
  }, [])

  


  
  const { queriedData, setSearchQuery, searchQuery, handleSearchChange } =
    useSearchHouses(setHouses);

  const { filteredHouses, selectedLocation, setSelectedLocation } =
    useHouseLocation(houses);

  const newQueriedData = queriedData.length > 0 ? queriedData : houses;
  const { selectedPriceRange, handlePriceChange } = useSelectHouse(
    newQueriedData,
    setHouses
  );

  return {
    user,
    setUser,
    setSearchQuery,
    filteredHouses,
    setHouses,
    selectedPriceRange,
    handlePriceChange,
    handleSearchChange,
    searchQuery,
    selectedLocation,
    setSelectedLocation,
  };
};

export default useGetPageData;
