import { Button, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchSelect from "./SearchSelect";
import SearchInput from "./SearchInput";
import { house } from "../../Services/getHouses";

interface Props {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  houses: house[];
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedPriceRange: string;
}

function SearchInputGroup({
  handlePriceChange,
  selectedPriceRange,
  handleSearchChange,
  houses,
  setSearchQuery,
  searchQuery,
}: Props) {
  return (
    <InputGroup marginX={10} justifyContent="center">
      <InputLeftElement
        children={<SearchIcon color="pink.600" />}
        className="search-icon"
      />
      <SearchInput
        selectedPriceRange={selectedPriceRange}
        handlePriceChange={handlePriceChange}
        handleSearchChange={handleSearchChange}
        houses={houses}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <SearchSelect
        selectedPriceRange={selectedPriceRange}
        handlePriceChange={handlePriceChange}
      />
    </InputGroup>
  );
}

export default SearchInputGroup;
