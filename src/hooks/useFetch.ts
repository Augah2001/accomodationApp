import axios from "axios"
import { useEffect, useState } from "react"
import apiClient from "../Services/apiClient"


const useFetch = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([] as T[])
    const [error, setError] = useState("")






    useEffect((

        )=> {
      
          apiClient.get(endpoint)
          .then(res=> setData(res.data))
          .catch((err) => setError(err.message))
        },[])
      
  return {data, error, setData}
    
  
}

export default useFetch
