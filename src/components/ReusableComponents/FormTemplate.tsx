import Joi from "joi";
import { Dispatch, SetStateAction, useState } from "react";

import FormPasswordInput from "./FormPasswordInput";
import FormTextInput from "./FormTextInput";
import FormButton from "./FormButton";
import FormText from "./FormText";

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
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      newErrors[input.id] = errorMessage;
    } else delete newErrors[input.id];
    setErrors(newErrors);

    const newData = { ...data };
    newData[input.id] = input.value;
    setData(newData);
    validateProperty(input);
  };

  const renderInput = (id: string, label: string, type: string) => {
    return (
      <FormTextInput
        id={id}
        type={type}
        label={label}
        onChange={handleChange}
        value={data[id]}
        errors={errors}
      />
    );
  };

  const renderPasswordInput = (id: string) => {
    return (
      <FormPasswordInput
        id={id}
        value={data[id]}
        showPassword={showPassword}
        onChange={handleChange}
        errors={errors}
        setShowPassword={setShowPassword}
      />
    );
  };

  const renderButton = (label: string) => {
    return <FormButton label={label} />;
  };

  const renderText = (
    route: string,
    text: string | null,
    linkText: string | null
  ) => {
    return <FormText route={route} text={text} linkText={linkText} />;
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
