import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextText } from "../components/Layout";
import { house } from "../Services/getHouses";

const useHouseLocation = (houses: house[]) => {

  const [selectedLocation, setSelectedLocation] = useState<string | "">();

  useEffect(() => {
    setSelectedLocation("Any");
  }, []);

  const filteredHouses =
    selectedLocation === "Any"
      ? houses
      : houses?.filter((house) => house.location.name === selectedLocation);

  return { filteredHouses, selectedLocation, setSelectedLocation };
};

export default useHouseLocation;
