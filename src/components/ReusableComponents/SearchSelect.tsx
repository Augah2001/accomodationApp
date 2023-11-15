import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";

const SearchSelect = () => {
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
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export default SearchSelect;
