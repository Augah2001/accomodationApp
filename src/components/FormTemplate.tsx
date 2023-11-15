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
import Joi from "joi";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

interface Props {
  children: (
    renderInput: (id: string, label: string, type: string) => JSX.Element,

    renderPasswordInput: (id: string) => JSX.Element,
    renderButton: (label: string) => JSX.Element,
    renderText: (
      route: string,
      text: string | null,
      linkText: string | null
    ) => JSX.Element
  ) => JSX.Element;
  doSubmit: () => void;
  schema: Joi.ObjectSchema<any> & { [key: string]: any };
  data: { [key: string]: string };
  setData: Dispatch<SetStateAction<{ [key: string]: string }>>;
}

const FormTemplate = ({ children, doSubmit, data, setData, schema }: Props) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const { error } = schema.validate(data);
    if (!error) return;
    const newErrors: { [key: string]: string } = {};
    error.details.map(
      (item) => (newErrors[item.path[0]] = error.message.replace(/["]/g, ""))
    );
    return newErrors;
  };

  const validateProperty = ({ id, value }: EventTarget & HTMLInputElement) => {
    const property = { [id]: value };
    console.log(schema);

    const newSchema = Joi.object({
      [id]: schema.extract(id),
    });

    
    const { error } = newSchema.validate(property);
    if (!error) return;
    return error.message.replace(/["]/g, "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
      setErrors(errors || {});
    } else {
      doSubmit();
    }
  };

  const handleChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>) => {

    const newErrors = { ...errors }
    const errorMessage = validateProperty(input) 
    if (errorMessage) { newErrors[input.id] = errorMessage }
    else delete newErrors[input.id];
    setErrors(newErrors)

    const newData = { ...data };
    newData[input.id] = input.value;
    setData(newData);
    validateProperty(input);

  };

  const renderInput = (id: string, label: string, type: string) => {
    return (
      <Box>
        <FormControl id={id}>
          <FormLabel>{label}</FormLabel>
          <Input
            type={type}
            value={data[id]}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormControl>
        {errors[id] && (
          <Box>
            <Text color="red.300">{errors[id]}</Text>
          </Box>
        )}
      </Box>
    );
  };

  const renderPasswordInput = (id: string) => {
    return (
      <FormControl id= {id}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={data[id]}
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
             handleChange(e)
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
    );
  };

  const renderButton = (label: string) => {
    return (
      <Stack spacing={10} pt={2}>
        <Button
          type="submit"
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

  const renderText = (
    route: string,
    text: string | null,
    linkText: string | null
  ) => {
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
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {children(renderInput, renderPasswordInput, renderButton, renderText)}
    </form>
  );
};

export default FormTemplate;
