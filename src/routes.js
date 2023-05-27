import { About, Appartment, Home, Nomatch } from "./pages"

import { ABOUT_PAGE, APPARTMENT_PAGE, HOME_PAGE } from "./utils/constants"


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
    path: '*',
    component: Nomatch
  },

]