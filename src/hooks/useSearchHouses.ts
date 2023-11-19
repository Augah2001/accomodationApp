import React from "react";
import { getHouses, house } from "../Services/getHouses";
import useSearch from "./useSearch";

const useSearchHouses = (houses: house[],
  setHouses: React.Dispatch<React.SetStateAction<house[] | []>>
) => useSearch<house>(getHouses() ,houses, setHouses);

export default useSearchHouses;
