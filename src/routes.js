import { About, Appartment, Bathroom, Bedroom, Home, Kitchen, Nomatch } from "./pages"

import { ABOUT_PAGE, APPARTMENT_PAGE, BATHROOM_PAGE, BEDROOM_PAGE, HOME_PAGE, KITCHEN_PAGE } from "./utils/constants"


export const routes = [
  {
    path: HOME_PAGE,
    component: Home,
    name: 'Home'
  },
  {
    path: ABOUT_PAGE,
    component: About,
    name: 'About'
  },
  {
    path: APPARTMENT_PAGE,
    component: Appartment,
    name: 'Appartment'
  },
  {
    path: KITCHEN_PAGE,
    component: Kitchen,
    name: 'Kitchen'
  },
  {
    path: BATHROOM_PAGE,
    component: Bathroom,
    name: 'Bathroom'
  },
  {
    path: BEDROOM_PAGE,
    component: Bedroom,
    name: 'Bedroom'
  },
  {
    path: '*',
    component: Nomatch
  },

]