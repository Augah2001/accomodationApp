import { Box, HStack, Stack, useColorModeValue } from "@chakra-ui/react";
import FormCard from "./FormTemplate";

const SignupForm = () => {
  return (
    <FormCard>
      {(renderInput, renderPasswordInput, renderButton, renderText) => {
        return (
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
            <Stack spacing={4}>
              <HStack>
                {renderInput("firstName", "First Name", "text")}
                {renderInput("lastName", "Last Name", "text")}
              </HStack>
              {renderInput("email", "Email", "text")}
              {renderPasswordInput()}
              {renderButton("Sign Up")}
              {renderText("/login", "Already have an account?", "login")}
            </Stack>
          </Box>
        );
      }}
    </FormCard>
  );
};

export default SignupForm;
