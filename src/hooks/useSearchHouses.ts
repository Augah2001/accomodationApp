import React from "react";
import { house } from "../Services/getHouses";
import useSearch from "./useSearch";

const useSearchHouses = (
  setHouses: React.Dispatch<React.SetStateAction<house[] | []>>,
  houses: house[]
) => useSearch<house>(houses, setHouses);

export default useSearchHouses;
