import React, { useState } from 'react'
import useSearchHouses from './useSearchHouses';
import useSelectHouse from './useSelectHouse';
import { getHouses, house } from '../Services/getHouses';

const useGetPageData = () => {
    

    const [houses, setHouses] = useState<house[]>(getHouses());

     const { queriedData, setSearchQuery, searchQuery, handleSearchChange } =
        useSearchHouses(setHouses);
    
     const newQueriedData = queriedData.length> 0 ? queriedData: getHouses()
     const { selectedPriceRange, handlePriceChange } = useSelectHouse(
       newQueriedData,
       setHouses
    );

    
    return {setSearchQuery, houses, setHouses, selectedPriceRange, handlePriceChange,handleSearchChange,searchQuery}
 }
 
export default useGetPageData