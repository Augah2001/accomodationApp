import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import { priceOptions } from "../../../Services/getPrices";

interface Props {
  handlePriceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedPriceRange: string;
}

const SearchSelect = ({ handlePriceChange, selectedPriceRange }: Props) => {
  return (
    <Select
      placeholder="Price"
      variant="unstyled"
      h={"40px"}
      borderRadius={5}
      icon={<ChevronDownIcon />}
      maxWidth="200px"
      paddingX={4}
      borderWidth="2px"
      borderLeftWidth="0px"
      borderRightWidth="0px"
      borderColor="purple.700"
      _focus={{ borderColor: "pink.600" }}
      paddingLeft={3}
      value={selectedPriceRange}
      onChange={(e) => {
        handlePriceChange(e);
      }}
    >
      {priceOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default SearchSelect;
