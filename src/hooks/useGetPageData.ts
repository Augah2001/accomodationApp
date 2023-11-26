import { useEffect } from "react";
import useSearchHouses from "./useSearchHouses";
import useSelectHouse from "./useSelectHouse";
import useHouseLocation from "./useHouseLocation";
import axios from "axios";
import useFetchHouses from "./useFetchHouses";
import { house } from "../Services/getHouses";
import { User } from "../components/Layout";

export type ContextText = {
  houses: house[];
  setHouses: () => void;
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
  
  const {data: houses, error, setData: setHouses} = useFetchHouses()

  useEffect((

  )=> {

    axios.get("http://localhost:443/api/houses/")
    .then(res=> setHouses(res.data))
  },[])

  
  const { queriedData, setSearchQuery, searchQuery, handleSearchChange } =
    useSearchHouses(setHouses, houses);

  const { filteredHouses, selectedLocation, setSelectedLocation } =
    useHouseLocation(houses);

  const newQueriedData = queriedData.length > 0 ? queriedData : houses;
  const { selectedPriceRange, handlePriceChange } = useSelectHouse(
    newQueriedData,
    setHouses
  );

  return {
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
