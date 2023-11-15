import React, { useState } from "react";

const useSearch = <T extends Record<string, string>>(
  initialData: T[],
  setData: React.Dispatch<React.SetStateAction<T[] | []>>
) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const newData = initialData.filter((item) => {
      const regex = new RegExp(query, "i");
      for (let key in item) {
        if (regex.test(item[key])) {
          return true;
        }
      }

      return false;
    });

    setData(newData);
  };

  return { searchQuery, handleSearchChange, setSearchQuery, };
};

export default useSearch;
