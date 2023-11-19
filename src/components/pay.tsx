import React, { useState } from "react";
import FormTemplate from "./ReusableComponents/Form/FormTemplate";
import Joi from "joi";

const Pay = () => {
  const [paynowData, setPaynowData] = useState<{ [key: string]: string }>({
    PhoneNumber: "",
  });

  const doSubmit = () => {
    console.log("payout succeeded");
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
