import Home from "./../pages/Home";
import About from "./../pages/About";
import Booking from "./../pages/Booking";
import Menu from "./../pages/Menu";
import Feature from "./../pages/Feature";
import Contact from "./../pages/Contact";
import Survey from "./../pages/Survey";
import Login from "./../pages/Auth/Login";
import Register from "./../pages/Auth/Register";

export const routerList = [
  { path: "/", component: Home },
  {path : '/survey', component : Survey},
  { path: "/menu", component: Menu },
  { path: "/auth/login", component: Login },
  { path: "/auth/register", component: Register },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/booking", component: Booking },
  { path: "/feature", component: Feature },
];
