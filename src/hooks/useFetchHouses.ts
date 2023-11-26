import { house } from "../Services/getHouses";
import { LocationType } from "../Services/getLocations";
import useFetch from "./useFetch";

const useFetchHouses = () => useFetch<house>("/houses");

export default useFetchHouses;
