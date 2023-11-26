import React from "react";
import useSelect from "./useSelect";
import { getHouses, house } from "../Services/getHouses";
import { initialPriceRange } from "../Services/getPrices";

const useSelectHouse = (
  data: house[],
  setData: (value: React.SetStateAction<house[]>) => void
) => useSelect<house>(data, setData, "price", initialPriceRange);

export default useSelectHouse;
