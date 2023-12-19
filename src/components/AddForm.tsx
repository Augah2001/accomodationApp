import image from "../assets/no-image-placeholder.webp";

import { useState } from "react";

import Joi, { number } from "joi";
import FormTemplate from "./ReusableComponents/Form/FormTemplate";
import { Heading, useToast } from "@chakra-ui/react";
import { useNavigate, useOutletContext } from "react-router-dom";

import axios from "axios";
import { ContextText } from "../hooks/useGetPageData";
import apiClient from "../Services/apiClient";

const AddForm = () => {
  const { user, setIsOpen, setUser, setHouses } =
    useOutletContext<ContextText>();

  const [houseData, setHouseData] = useState<{ [key: string]: any }>({
    houseNumber: "",
    description: "",
    curfew: "",
    price: "",
    distance: "",
    services: ["jacuzzi", "gas", "wifi"],
    backgroundImage: "",
    images: [image, image, image],
    location: "",
    ownerId: user._id,
    capacity: "",
    occupied: "",
  });

  const schema = Joi.object({
    houseNumber: Joi.number().required(),
    description: Joi.string(),
    curfew: Joi.string().required(),
    price: Joi.number().required(),
    distance: Joi.string(),
    services: Joi.array(),
    backgroundImage: Joi.string().allow(""),
    images: Joi.array().allow(""),
    location: Joi.string().required(),
    ownerId: Joi.string().allow(""),
    capacity: Joi.number().integer().required(),
    occupied: Joi.number()
      .integer()
      .max(parseInt(houseData.capacity) || 0)
      .required(),
  });

  const toast = useToast({
    position: "top",
    title: "added succeessfully",
  });

  const navigate = useNavigate();

  const doSubmit = () => {
    axios
      .post("http://localhost:443/api/houses/", houseData)
      .then((res) => {
        apiClient
          .get("/houses")
          .then((res) => setHouses(res.data))
          .catch((err) => toast({ title: err.response.data }));
        setUser(user);
        navigate("/my-assets");
        setIsOpen(false);
        toast({ title: "added successfully" });
      })
      .catch((err) =>
        toast({
          title: err.response.data,
        })
      );
  };

  return (
    <FormTemplate
      schema={schema}
      doSubmit={doSubmit}
      data={houseData}
      setData={setHouseData}
    >
      {(renderInput, _, renderButton, any, renderRadioButtons) => {
        return (
          <>
            {renderInput("houseNumber", "House Number", "number")}
            {renderInput("location", "Location", "text")}
            {renderInput("description", "Description", "text")}

            <Heading marginTop={3} as={"span"} fontSize="14px">
              {" "}
              Curfew
            </Heading>
            {renderRadioButtons(
              "curfew",

              [
                { label: "yes", value: "yes" },
                { label: "no", value: "no" },
              ],
              (id, value) => {
                setHouseData({ ...houseData, curfew: value });
              }
            )}
            {renderInput("price", "Price", "text")}
            {renderInput("distance", "Distance (m)", "number")}
            {renderInput("capacity", "Capacity", "number")}
            {renderInput("occupied", "Occupied", "number")}

            {renderButton("ADD")}
          </>
        );
      }}
    </FormTemplate>
  );
};

export default AddForm;
