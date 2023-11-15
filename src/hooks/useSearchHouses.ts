import React from "react";
import { getHouses, house } from "../Services/getHouses";
import useSearch from "./useSearch";

const useSearchHouses = (
  setHouses: React.Dispatch<React.SetStateAction<house[] | []>>
) => useSearch<house>(getHouses(), setHouses);

export default useSearchHouses;
