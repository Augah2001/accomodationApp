import { Box, HStack, Stack, useColorModeValue } from "@chakra-ui/react";
import FormCard from "./ReusableComponents/Form/FormTemplate";
import { useState } from "react";
import Joi from "joi";

const SignupForm = () => {
  const [localContext, setlocalContext] = useState<{ [key: string]: any }>({
    landlordDiv: false,
  });

  const [user, setUser] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    authKey: "",
  });

  const handleRadioChange = (id: string, value: string) => {
    setUser({ ...user, [id]: value });
    if (value === "landlord") {
      setlocalContext({ ...localContext, landlordDiv: true });
    } else {
      setlocalContext({ ...localContext, landlordDiv: false });
    }
  };

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
    userType: Joi.string().required().label("user type"),
    authKey: Joi.string(),
  });

  const doSubmit = () => {
    console.log("submitted");
  };

  return (
    <FormCard
      doSubmit={doSubmit}
      schema={schema}
      data={user}
      setData={setUser}
      localContext={localContext}
    >
      {(
        renderInput,
        renderPasswordInput,
        renderButton,
        renderText,
        renderRadioButtons
      ) => {
        return (
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
            <Stack spacing={4}>
              <HStack>
                {renderInput("firstName", "First Name", "text")}
                {renderInput("lastName", "Last Name", "text")}
              </HStack>
              {renderInput("email", "Email", "text")}
              {renderPasswordInput("password")}
              {renderRadioButtons(
                "userType",
                [
                  { label: "tenant", value: "tenant" },
                  { label: "landlord", value: "landlord" },
                ],
                handleRadioChange
              )}
              <Box color={"green.400"}>
                {localContext.landlordDiv &&
                  renderInput("authKey", "Authorization key", "text")}
              </Box>
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
