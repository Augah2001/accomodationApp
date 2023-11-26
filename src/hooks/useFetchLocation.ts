import { LocationType } from "../Services/getLocations";
import useFetch from "./useFetch";

const useFetchLocation = () => useFetch<LocationType>("/locations");

export default useFetchLocation;
