
export interface LocationType{
    name: string;
    id:number,
    distance: string | null,
   
    
}

const locations: LocationType[] = [
    {name: "Any", id: 0 , distance: null},
    {name: "Maboureign", id: 1, distance: "2km"},
    {name: "Mount Pleasant", id: 2, distance: "500m"},
    {name: "Borrowdale", id: 3, distance: "3km"},
    {name: "Tynwald", id: 4, distance: "6km"},
    {name: "Vainona", id: 5, distance: "1km"},
    {name: "Highfields", id: 6, distance: "2km"},
    {name: "Masasa Park", id: 7, distance: "3km"},
    {name: "Chitungwiza", id: 8, distance: "2km"},
    {name: "Glenview", id: 9, distance: "2km"},
    {name: "Belvedere", id: 10, distance: "1km"},

]


export const getLocations = () => {
    return locations
}