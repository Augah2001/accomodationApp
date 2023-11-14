import { useState } from "react";
import { house, getHouses } from "../Services/getHouses";

const useHouseStates = () => {
    const [houses, setHouses] = useState<house[]>(getHouses());
    return [houses, setHouses]
}

export default useHouseStates;
