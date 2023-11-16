import { Input } from '@chakra-ui/react';
import { house } from '../../Services/getHouses';

interface Props {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  houses: house[];
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedPriceRange: string
}


const SearchInput = ({handleSearchChange, searchQuery, houses, setSearchQuery }: Props) => {
  

  

  return (
    <Input
    
      variant="unstyled"
      type="text"
      h="40px"
      placeholder="Search..."
      _focus={{
        borderRightColor: "pink.600",
        borderRightWidth: "2px",
        borderLeftWidth: "2px",
        borderLeftColor: "pink.600",
        borderRadius: "9px",
        borderTopStyle: "none",
        borderBottomStyle: "none",
        caretColor: "green.600",
      }}
      borderWidth="2px"
      borderRadius="5px"
      borderColor={"purple.700"}
          
      paddingLeft={10}
      value={searchQuery}
      
      
      onChange={(e)=> handleSearchChange(e)}
    />
  );
}

export default SearchInput