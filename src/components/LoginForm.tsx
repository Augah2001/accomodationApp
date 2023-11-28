import { Box, Stack, useColorModeValue, useToast } from "@chakra-ui/react";
import FormCard from "./ReusableComponents/Form/FormTemplate";
import {  useState } from "react";
import Joi from "joi";
import { jwtDecode } from "jwt-decode";

import apiClient from "../Services/apiClient";
import { ContextText } from "../hooks/useGetPageData";
import { useNavigate, useOutletContext } from "react-router-dom";
import { User } from "./Layout";

const LoginForm = () => {


  const toast = useToast();
  const { setIsOpen, setUser,  } =
    useOutletContext<ContextText>();
  const [loginData, setLoginData] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate()


  const doSubmit = () => {
    apiClient.post("/logins", loginData).then((res) => {
      toast({title: "login successful", position: 'top'});
      const jwt = res.headers["x-auth-token"]
      localStorage.setItem('token', jwt)
      const user: User = jwtDecode(jwt)
      setUser(user);
      setIsOpen(false);
      navigate('/me')
    

      
    }).catch(err=> {
      console.log(err)
      toast({title:"logged", position: "top"})});
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
