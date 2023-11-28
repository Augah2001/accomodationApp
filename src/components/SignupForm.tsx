import { Box, HStack, Stack, useColorModeValue } from "@chakra-ui/react";
import FormCard from "./ReusableComponents/Form/FormTemplate";
import { useState } from "react";
import Joi from "joi";
import { jwtDecode } from "jwt-decode";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ContextText } from "../hooks/useGetPageData";
import apiClient from "../Services/apiClient";
import { User } from "./Layout";

const SignupForm = () => {
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
  const [localContext, setlocalContext] = useState<{ [key: string]: any }>({
    landlordDiv: false,
  });

  const { setIsOpen,setUser } = useOutletContext<ContextText>();

  const [userData, setUserData] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    authorization_key: "",
  });

  const handleRadioChange = (id: string, value: string) => {
    setUserData({ ...userData, [id]: value });
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
    authorization_key:
      userData.userType === "landlord"
        ? Joi.string().required()
        : Joi.string().allow(""),
  });

  const navigate = useNavigate();

  const doSubmit = () => {
    if (userData.userType === "tenant") {
      delete userData["authorization_key"];
      apiClient
        .post("/users", userData)
        .then((res) => {
          toast();
          
          localStorage.setItem("token", res.headers["x-auth-token"]);
          const user: User = jwtDecode(res.headers["x-auth-token"]);

          setUser(user);
          navigate('/')
          setIsOpen(false);
          // window.location.reload()
        })
        .catch((err) => toast({ title: err.response }));
    } else {
      apiClient
        .post("/auth", { authorization_key: userData.authorization_key })
        .then((res) => {
          if (res.data) {
            apiClient
              .post("/users", userData)
              .then((res) => {
                toast();
                
                localStorage.setItem("token", res.headers["x-auth-token"]);
                const user: User = jwtDecode(res.headers["x-auth-token"]);

                setUser(user);
                setIsOpen(false);

                navigate('/')
              })
              .catch((err) => toast({ title: err.response.data, position: "top" }));
          }
        })
        .catch((err) => {
          toast({ title: err.response.data, position: "top" });
          return;
        });
    }
  };

  return (
    <FormCard
      doSubmit={doSubmit}
      schema={schema}
      data={userData}
      setData={setUserData}
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
              {
                <Box color={"green.400"}>
                  {localContext.landlordDiv &&
                    renderInput(
                      "authorization_key",
                      "Authorization key",
                      "text"
                    )}
                </Box>
              }
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
