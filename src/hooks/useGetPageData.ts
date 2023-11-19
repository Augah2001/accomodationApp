import  { useState } from "react";
import useSearchHouses from "./useSearchHouses";
import useSelectHouse from "./useSelectHouse";
import { getHouses } from "../Services/getHouses";
import useHouseLocation from "./useHouseLocation";

const useGetPageData = () => {
  const [houses, setHouses] = useState(getHouses());

  const { filteredHouses, selectedLocation, setSelectedLocation } =
    useHouseLocation(houses);

  const { queriedData, setSearchQuery, searchQuery, handleSearchChange } =
    useSearchHouses(filteredHouses, setHouses);

  const newQueriedData = queriedData.length > 0 ? queriedData : getHouses();
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
