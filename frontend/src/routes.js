

import { 
  CALENDAR_ROUTE, 
  GALLERY_ROUTE, 
  LOGIN_ROUTE, 
  PROFILE_ROUTE, 
  SIGNUP_ROUTE 
} from "./utils/consts"
import MyCalendar from "./pages/MyCalendar"
import Gallery from "./pages/Gallery"
import Profile from "./pages/Profile"
import Login from "./pages/Auth"
import Signup from "./pages/Auth"
import Auth from "./pages/Auth"

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Element: Profile
  }
];

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
    Element: MyCalendar
  },
  
]

