import {
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchSelect from "./SearchSelect";
import SearchInput from "./SearchInput";
import { house } from "../../Services/getHouses";

interface Props {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  houses: house[];
  handleSearchChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInputGroup({ handleSearchChange, houses, setSearchQuery, searchQuery}: Props) {
  return (
    <InputGroup marginX={10}>
      <InputLeftElement
        children={<SearchIcon color="pink.600" />}
        className="search-icon"
      />
    <SearchInput handleSearchChange = {handleSearchChange} houses = {houses } setSearchQuery = {setSearchQuery} searchQuery ={searchQuery}  />
      <SearchSelect />
      <Button
        bgColor={"pink.600"}
        _hover={{ opacity: "1.0", bgColor: "pink.500" }}
        
      >
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchInputGroup;
