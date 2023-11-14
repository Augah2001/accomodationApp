import { Box, HStack, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import FormCard from "./FormTemplate";

const LoginForm = () => {
  return (
    <FormCard>
      {(renderInput, renderPasswordInput, renderButton, renderText) => {
        return (
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
            <Stack spacing={4}>
              {renderInput("email", "Email", "text")}
              {renderPasswordInput()}
              {renderButton("Login")}
              {renderText("/signup", "Don't have an account?", "signup")}
            </Stack>
          </Box>
        );
      }}
    </FormCard>
  );
};

export default LoginForm;
