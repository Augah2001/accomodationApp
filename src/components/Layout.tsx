import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'

import Navbar from './Navbar'

import { Outlet, useLocation, useParams } from 'react-router-dom'
import { house, getHouses } from '../Services/getHouses'

export type ContextText = [houses: house[] | null, setHouse: () => void];

const Layout = () => {

  const { id} = useParams()

  const { pathname } = useLocation()
  const paramRoute = `/${id}`


  

  
  
  const routeTemplateAreas : {[key: string]: any} = {
    "/": {
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`,
    },
    

    [paramRoute]: `"nav nav nav" "leftSide main rightSide"`,
  };

  const routesTemplateColumns: {[key: string]: any} = {
    "/": {
      base: "1fr",
      md: "1fr",
      lg: "300px 1fr",
    },
    [paramRoute]: {
      base: "1fr",
      md: "1fr",
      lg: "1fr 4fr 1fr",
    },
  };

  const currentTemplateAreas= routeTemplateAreas[pathname]
  const currentTemplateColumns = routesTemplateColumns[pathname]

  


  const [houses, setHouses] = useState<house[]>(getHouses());



  return (
    <>
      <Grid
        paddingX={3}
        templateAreas={currentTemplateAreas}
        templateColumns={currentTemplateColumns}
      >
        <GridItem paddingY={3} marginTop={2} area="nav">
          {" "}
          <Navbar />
        </GridItem>
        <Outlet context={[houses, setHouses]} />
      </Grid>
    </>
  );}

export default Layout