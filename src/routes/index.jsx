/** @format */

import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Products from '../pages/products';
import ContactUs from '../pages/contactUs';
import FDMPrinters from '../pages/products/FDMPrinters';
import ResinPrinters from '../pages/products/resinPrinters';
import Filament from '../pages/products/filament';
import Resin from '../pages/products/resin';
import AboutUs from '../pages/aboutUs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'sign_up',
    element: <SignUp />,
  },
  {
    path: 'products/',
    element: <Products />,
  },
  {
    path: 'contact_us',
    element: <ContactUs />,
  },
  {
    path: 'fdm_printers',
    element: <FDMPrinters />,
  },
  {
    path: 'resin_printers',
    element: <ResinPrinters />,
  },
  {
    path: 'filament',
    element: <Filament />,
  },
  {
    path: 'resin',
    element: <Resin />,
  },
  {
    path: 'about_us',
    element: <AboutUs />,
  },
]);
