import React, { useState } from "react";
import FormTemplate from "./ReusableComponents/Form/FormTemplate";
import Joi from "joi";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ContextText } from "../hooks/useGetPageData";
import { useToast } from "@chakra-ui/react";
import apiClient from "../Services/apiClient";

const Pay = () => {
  const [paynowData, setPaynowData] = useState<{ [key: string]: string }>({
    PhoneNumber: "",
  });

  const navigate = useNavigate()


  const { houses, id} = useOutletContext<ContextText>();

  let house = houses.find((item) => item.houseNumber === parseInt(id));
  const toast = useToast();
  
  

  const doSubmit = () => {

    // if ((house && house.occupied <= house.capacity)) {
    //   house.occupied = house.occupied + 1
    //   console.log(house.curfew)
    //   apiClient.put(`/houses/${id}`, house).then(res=> setHouses([...houses,res.data])).catch(res=> console.log(res))
    //   toast({ title: "payment succeeded" });
    
      toast({ title: "payment succeeded" })
      navigate(`/${id}`)

    


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
