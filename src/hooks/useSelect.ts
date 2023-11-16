import React, { useState } from "react";

const useSelect = <T extends Record<string, any>>(
  allData: T[],
  setData: (value: React.SetStateAction<T[]>) => void,
  filterProp: string,
  initialValue: string
) => {
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<string>(initialValue);

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.currentTarget.value;
    setSelectedPriceRange(selectedValue);

    if (selectedValue === "any") {
      setData(allData);
    } else {
      const [minValue, maxValue] = selectedValue.split("-").map(Number);

      const newHouses = allData.filter(
        (house) =>
          house[filterProp] >= minValue && house[filterProp] <= maxValue
      );
      setData(newHouses);
    }
  };

  return { handlePriceChange, selectedPriceRange, setSelectedPriceRange };
};

export default useSelect;
