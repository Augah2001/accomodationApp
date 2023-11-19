import image from "../assets/no-image-placeholder.webp";


export interface house {
  houseNumber: number;
  description: string;
  curfew: boolean;
  price: number;
  distance: string;
  services: ["jacuzzi", "gas", "wifi"],
  backgroundImage: string;
  images: any[];
  location: string;
  [key:string]: any
}

const houses: house[] = [
  {
    houseNumber: 0,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 200,
    distance: "5km",
    images: [image, image, image, image],
    location: "Tynwald",
  },
  {
    houseNumber: 1,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 200,
    distance: "5km",
    images: [image, image, image, image],
    location: "Borrowdale",
  },
  {
    houseNumber: 2,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: false,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 100,
    distance: "5km",
    images: [image, image, image, image],
    location: "Masasa Park",
  },
  {
    houseNumber: 3,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 150,
    distance: "5km",
    images: [image, image, image, image],
    location: "Chitungwiza",
  },
  {
    houseNumber: 4,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 568,
    distance: "5km",
    images: [image, image, image, image],
    location: "Tynwald",
  },
  {
    houseNumber: 5,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: false,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 26,
    distance: "5km",
    images: [image, image, image, image],
    location: "Highfields",
  },
  {
    houseNumber: 6,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 290,
    distance: "5km",
    images: [image, image, image, image],
    location: "Borrowdale",
  },
  {
    houseNumber: 7,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam",
      
    curfew: false,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 150,
    distance: "5km",
    images: [image, image, image, image],
    location: "Masasa Park",
  },
  {
    houseNumber: 8,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"],
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Maboureign",
  },
  {
    houseNumber: 9,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Chitungwiza",
  },
  {
    houseNumber: 10,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Borrowdale",
  },
  {
    houseNumber: 11,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Glenview",
  },
  {
    houseNumber: 12,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Belvedere",
  },
  {
    houseNumber: 13,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Vainona",
  },
  {
    houseNumber: 14,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Masasa Park",
  },
  {
    houseNumber: 15,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Maboureign",
  },
  {
    houseNumber: 16,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Borrowdale",
  },
  {
    houseNumber: 17,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Mount Pleasant",
  },
  {
    houseNumber: 18,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Maboureign",
  },
  {
    houseNumber: 19,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Maboureign",
  },
  {
    houseNumber: 20,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Tynwald",
  },
  {
    houseNumber: 21,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Mount Pleasant",
  },
  {
    houseNumber: 22,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Highfields",
  },
  {
    houseNumber: 23,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Glenview",
  },
  {
    houseNumber: 24,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Tynwald",
  },
  {
    houseNumber: 25,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Belvedere",
  },
  {
    houseNumber: 26,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Mount Pleasant",
  },
  {
    houseNumber: 27,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Mount Pleasant",
  },
  {
    houseNumber: 28,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Vainona",
  },
  {
    houseNumber: 29,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Borrowdale",
  },
  {
    houseNumber: 30,
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adaliquid amet at delectus doloribus dolorum expedita hic, ipsummaxime modi nam officiis porro, quae, quisquam quosreprehenderit velit? Natus, totam", 
    curfew: true,
    backgroundImage: "",
    services: ["jacuzzi", "gas", "wifi"], 
    price: 305,
    distance: "5km",
    images: [image, image, image, image],
    location: "Tynwald",
  },
];

export const getHouses = () => {
  return houses;
};
