import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  Select,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

function MyComponent() {
  return (
    <InputGroup marginX={10}>
      <InputLeftElement
        children={<SearchIcon color="pink.600" />}
        className="search-icon"
      />

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
        // borderRightColor={"pink.600"}
        // borderRightWidth={"2px"}
        // borderLeftWidth={"2px"}
        // borderLeftColor={"pink.600"}
        // borderRadius="0px"

        borderWidth="2px"
        borderRadius="5px"
        borderColor={"purple.700"}
        maxWidth="600px"
      />
      <Select
        placeholder="Location..."
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
      <Button  bgColor={"pink.600"} _hover={{ opacity: "1.0", bgColor: "pink.500"}}>Search</Button>
    </InputGroup>
  );
}

export default MyComponent;
