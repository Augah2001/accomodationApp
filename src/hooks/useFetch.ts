import axios from "axios"
import { useEffect, useState } from "react"
import apiClient from "../Services/apiClient"


const useFetch = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([] as T[])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)






    

    useEffect((

      
        )=> {
          setIsLoading(true)
      
          apiClient.get(endpoint)
          .then(res=> setData(res.data))
          .catch((err) => setError(err.message))
          setIsLoading(false)
        },[])

        
      
  return {data, error, setData, isLoading}
    
  
}

export default useFetch
