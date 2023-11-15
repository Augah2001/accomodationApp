import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  id: string;
  value: string;
  showPassword: boolean;
  onChange: ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => void;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  errors: { [key: string]: string };
}

const FormPasswordInput = ({
  id,
  value,
  showPassword,
  onChange,
  setShowPassword,
  errors,
}: Props) => {
  return (
    <Box>
      <FormControl id={id}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={value}
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              onChange(e);
            }}
          />
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {errors[id] && <Text color={"red.400"}>{errors[id]}</Text>}
    </Box>
  );
};

export default FormPasswordInput;
