import image from "../assets/no-image-placeholder.webp";


import React, { useState } from 'react'

import Joi, { any, boolean, number } from 'joi'
import FormTemplate from './ReusableComponents/Form/FormTemplate'
import { Select, Text, Heading } from '@chakra-ui/react'
import { useOutletContext } from "react-router-dom";

import axios from "axios";
import { ContextText } from "../hooks/useGetPageData";


const AddForm = () => {

  const { user} = useOutletContext<ContextText>()
  console.log(user)

  const [houseData, setHouseData] = useState<{[key: string]: any}>({
    houseNumber: "",
    description: "",
    curfew: "",
    price: "",
    distance: "",
    services: ["jacuzzi", "gas", "wifi"],
    backgroundImage: "",
    images: [image, image, image],
    location: "",
    ownerId:user._id

    
  })



  const schema = Joi.object({
    houseNumber: Joi.number().required(),
    description: Joi.string(),
    curfew: Joi.string().required(),
    price: Joi.number().required(),
    distance: Joi.string(),
    services: Joi.array(),
    backgroundImage: Joi.string().allow(''),
    images: Joi.array().allow(''),
    location: Joi.string().required(),
    ownerId: Joi.string().allow('')
    


    

  })

  const doSubmit = () => {
    axios.post("http://localhost:443/api/houses/", houseData)
    .then(res=> console.log(res.data) )
    .catch(err=> console.log(err))

  }

  return (
    <FormTemplate schema={schema} doSubmit={doSubmit} data={houseData} setData={setHouseData}>
        {(renderInput, _, renderButton, any ,renderRadioButtons ) => {
            return (
              <>
                {renderInput("houseNumber", "House Number","number")}
                {renderInput("location", "Location", "text")}
                {renderInput("description", "Description","text")}
                
                <Heading marginTop={3} as = {"span"} fontSize= "14px"> Curfew</Heading>
                {renderRadioButtons("curfew",
                
                [
                  { label: "yes", value: "yes" },
                  { label: "no", value: "no" },
                ], (id, value) => { 
                  setHouseData({...houseData, curfew: value})
                  console.log(id, value)}
                )}
                {renderInput("price", "Price","text")}
                {renderInput("distance", "Distance (m)","number")}
                {renderButton("ADD")}
              </>
            )

        }}
    </FormTemplate>
    
  )
}

export default AddForm