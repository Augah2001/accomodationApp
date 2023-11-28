import { house } from "../Services/getHouses";

import useFetch from "./useFetch";

const useFetchHouses = () => useFetch<house>("/houses");

export default useFetchHouses;
