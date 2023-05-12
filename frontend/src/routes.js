
import {
  CALENDAR_ROUTE,
  GALLERY_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  SIGNUP_ROUTE,
  NATIVE_ROUTE
} from "./utils/consts"

import Calendar from "./pages/Calendar"
import Gallery from "./pages/Gallery"
import Profile from "./pages/Profile"
// import Login from "./pages/Auth"
// import Signup from "./pages/Auth"
import Auth from "./pages/Auth"
import Native from './pages/Native'

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Element: Profile
  }
]

export const publicRoutes = [

  {
    path: LOGIN_ROUTE,
    Element: Auth
  },
  {
    path: SIGNUP_ROUTE,
    Element: Auth
  },
  {
    path: GALLERY_ROUTE,
    Element: Gallery
  },
  {
    path: CALENDAR_ROUTE,
    Element: Calendar
  },
  {
    path: NATIVE_ROUTE,
    Element: Native
  }

]

