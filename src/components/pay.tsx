import React, { useState } from "react";
import FormTemplate from "./ReusableComponents/Form/FormTemplate";
import Joi from "joi";
import { useOutletContext } from "react-router-dom";
import { ContextText } from "../hooks/useGetPageData";
import { useToast } from "@chakra-ui/react";

const Pay = () => {
  const [paynowData, setPaynowData] = useState<{ [key: string]: string }>({
    PhoneNumber: "",
  });

  const {houses, id} = useOutletContext<ContextText>()
  
  const house = houses.find(item=> item.houseNumber === parseInt(id))
  const toast = useToast()


  const doSubmit = () => {
        toast({title: "payment succeeded"})
   
  };

  const schema: Joi.ObjectSchema<any> & { [key: string]: any } = Joi.object({
    PhoneNumber: Joi.string().label("Phone").required(),
  });

  return (
    <FormTemplate
      doSubmit={doSubmit}
      schema={schema}
      data={paynowData}
      setData={setPaynowData}
    >
      {(renderInputData, _, renderButton) => {
        return (
          <>
            {renderInputData("PhoneNumber", "Phone Number", "text")}
            {renderButton("PAY")}
          </>
        );
      }}
    </FormTemplate>
  );
};

export default Pay;
