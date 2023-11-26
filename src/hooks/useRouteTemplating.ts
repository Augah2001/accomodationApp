import { useLocation, useParams } from "react-router-dom";

const useRouteTemplating = () => {
  const { id } = useParams();

  const { pathname } = useLocation();
  const paramRoute = `/${id}`;
  const paramRouteView = `${paramRoute}/view`;
  const paramRoutePay = `${paramRoute}/pay`;

  const routeTemplateAreas: { [key: string]: any } = {
    "/": {
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`,
    },
    "/me": {
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`,
    },

    [paramRoute]: `"nav nav nav" "leftSide main rightSide"`,
    "/signup": {
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`,
    },
    "/login": {
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`,
    },
    [paramRouteView]: `"nav nav nav" "leftSide main rightSide"`,
    [paramRoutePay]: `"nav nav nav" "leftSide main rightSide"`,
    "/me/my-assets":  {
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`,
    },
    "/me/my-assets/add": 
    {
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`,
    }
  };

  const routesTemplateColumns: { [key: string]: any } = {
    "/": {
      base: "1fr",
      md: "1fr",
      lg: "300px 1fr",
    },
    "/me": {
      base: "1fr",
      md: "1fr",
      lg: "300px 1fr",
    },
    [paramRoute]: {
      base: "1fr",
      md: "1fr",
      lg: "1fr 4fr 1fr",
    },
    "/signup": {
      base: "1fr",
      md: "1fr",
      lg: "300px 1fr",
    },
    "/login": {
      base: "1fr",
      md: "1fr",
      lg: "300px 1fr",
    },
    [paramRouteView]: {
      base: "1fr",
      md: "1fr",
      lg: "1fr 4fr 1fr",
    },
    [paramRoutePay]: {
      base: "1fr",
      md: "1fr",
      lg: "1fr 4fr 1fr",
    },

    "/me/my-assets":  {
      base: "1fr",
      md: "1fr",
      lg: "200x 1fr",
    },
    "/me/my-assets/add": {
      base: "1fr",
      md: "1fr",
      lg: "0px 1fr",
    },
    
  };

  const currentTemplateAreas = routeTemplateAreas[pathname];
  const currentTemplateColumns = routesTemplateColumns[pathname];

  return { currentTemplateAreas, currentTemplateColumns };
};

export default useRouteTemplating;
