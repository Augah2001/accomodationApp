import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import FormCard from "./ReusableComponents/FormTemplate";
import { useRef, useState } from "react";
import Joi from "joi";

const LoginForm = () => {
  const [loginData, setLoginData] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const doSubmit = () => {
    console.log("submitted");
  };

  const schema: Joi.ObjectSchema<any> & { [key: string]: any } = Joi.object({
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

  return (
    <FormCard
      doSubmit={doSubmit}
      schema={schema}
      data={loginData}
      setData={setLoginData}
    >
      {(renderInput, renderPasswordInput, renderButton, renderText) => {
        return (
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
            <Stack spacing={4}>
              {renderInput("email", "Email", "text")}
              {renderPasswordInput("password")}
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
