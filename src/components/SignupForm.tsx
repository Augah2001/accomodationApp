import { Box, HStack, Stack, useColorModeValue } from "@chakra-ui/react";
import FormCard from "./ReusableComponents/FormTemplate";
import { useState } from "react";
import Joi from "joi";

export type DataType = { firstName: string; lastName: string; email: string };

export type setDataType = React.Dispatch<
  React.SetStateAction<{
    firstName: string;
    lastName: string;
    email: string;
  }>
>;

const SignupForm = () => {
  const [user, setUser] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const schema: Joi.ObjectSchema<any> & { [key: string]: any } = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string()
      .label("Email")
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com"] },
        ignoreLength: true,
      })
      .required(),
    password: Joi.string().required(),
  });

  const doSubmit = () => {
    console.log("submitted");
  };
  return (
    <FormCard doSubmit={doSubmit} schema={schema} data={user} setData={setUser}>
      {(renderInput, renderPasswordInput, renderButton, renderText) => {
        return (
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
            <Stack spacing={4}>
              <HStack>
                {renderInput("firstName", "First Name", "text")}
                {renderInput("lastName", "Last Name", "text")}
              </HStack>
              {renderInput("email", "Email", "text")}
              {renderPasswordInput("password")}
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
