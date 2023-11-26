import { Box, Stack, useColorModeValue, useToast } from "@chakra-ui/react";
import FormCard from "./ReusableComponents/Form/FormTemplate";
import { useRef, useState } from "react";
import Joi from "joi";
import axios from "axios";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { ContextText } from "./Layout";

const LoginForm = () => {


  const toast = useToast({
    position: "top",
    title: "signup successful",
    containerStyle: {
      width: "800px",
      maxWidth: "500px",
      color: "pink.600",
      backgroundColor: "pink.600",
    },
  });
  const { setIsOpen, setIsLogged, setUser, user } =
    useOutletContext<ContextText>();
  const [loginData, setLoginData] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const {pathname}  = useLocation()

  const doSubmit = () => {
    axios.post("http://localhost:443/api/logins", loginData).then((res) => {
      toast();
      setUser(res.data);
      setIsOpen(false);
      navigate('/me')
      setIsLogged(true); 
      console.log(res.data)
      // Explicitly set isLogged to true // Redirect to home page
    });
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
