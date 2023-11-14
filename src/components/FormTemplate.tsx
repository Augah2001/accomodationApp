import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

interface Props {
  children: (
    renderInput: (id: string, label: string, type: string) => JSX.Element,
    renderPasswordInput: () => JSX.Element,
    renderButton: (label: string) => JSX.Element,
    renderText: (route: string,text: string | null, linkText: string | null) => JSX.Element
  ) => JSX.Element;
}

const FormTemplate = ({ children }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const renderInput = (id: string, label: string, type: string) => {
    return (
      <Box>
        <FormControl id={id} isRequired>
          <FormLabel>{label}</FormLabel>
          <Input type={type} />
        </FormControl>
      </Box>
    );
  };

  const renderPasswordInput = () => {
    return (
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={showPassword ? "text" : "password"} />
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
    );
  };

  const renderButton = (label: string) => {
    return (
      <Stack spacing={10} pt={2}>
        <Button
          size="lg"
          bg={"pink.600"}
          color={"white"}
          _hover={{
            bg: "pink.500",
          }}
        >
          {label}
        </Button>
      </Stack>
    );
  };

  const renderText = (route: string, text: string | null, linkText: string | null) => {
    return (
      <Stack pt={6}>
        <Text align={"center"}>
          {text + " "}
          <LinkRouter to={route}>
            {" "}
            <Link color="pink.400">{linkText}</Link>
          </LinkRouter>
        </Text>
      </Stack>
    );
  };
  return children(renderInput, renderPasswordInput, renderButton, renderText);
};

export default FormTemplate;
