
import image from "../assets/no-image-placeholder.webp"

export interface house {
    
    houseNumber: number,
    description: string,
    curfew:boolean,
    price: number,
    distance: string,
    services: string[]
    backgroundImage: string
    images: any[]
}


const houses: house[] = [
    {houseNumber:0, description:"lorem ipsum", curfew: true, backgroundImage: "", services: ["lorem ipsum"], price: 200, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:1, description:"lorem ipsum", curfew: true, backgroundImage: "", services: ["lorem ipsum"], price: 200, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:2, description:"lorem ipsum", curfew: false, backgroundImage: "", services: ["lorem ipsum"], price: 100, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:3, description:"lorem ipsum", curfew: true, backgroundImage: "", services: ["lorem ipsum"], price: 150, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:4, description:"lorem ipsum", curfew: true, backgroundImage: "", services: ["lorem ipsum"], price: 568, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:5, description:"lorem ipsum", curfew: false, backgroundImage: "", services: ["lorem ipsum"], price: 26, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:6, description:"lorem ipsum", curfew: true, backgroundImage: "", services: ["lorem ipsum"], price: 290, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:7, description:"lorem ipsum", curfew: false, backgroundImage: "", services: ["lorem ipsum"], price: 150, distance: '5km',  images: [image, image,image,image]  },
    {houseNumber:8, description:"lorem ipsum", curfew: true, backgroundImage: "", services: ["lorem ipsum"], price: 305, distance: '5km',  images: [image, image,image,image]  }
]

export const getHouses = () => {
    return houses
}