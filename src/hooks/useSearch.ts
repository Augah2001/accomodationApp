import React, { useState } from "react";

const useSearch = <T extends Record<string, string>>(
  initialData: T[],

  setData: React.Dispatch<React.SetStateAction<T[] | []>>
) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queriedData, setQueriedData] = useState<T[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    setSearchQuery(query);

    const data = initialData.filter((item) => {
      const regex = new RegExp(query, "i");
      for (let key in item) {
        if (regex.test(item[key])) {
          return true;
        }
      }

      return false;
    });
    data.length <= 0 ? setQueriedData(data) : setQueriedData(initialData);

    setData(data);
  };

  return {
    queriedData,
    searchQuery,
    handleSearchChange,
    setSearchQuery,
    setData,
  };
};

export default useSearch;
