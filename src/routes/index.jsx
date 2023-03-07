/** @format */

import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Login from '../components/login';
import SignUp from '../components/signup';
import Header from '../components/header';
import Products from '../components/products';
import ContactUs from '../components/contactUs';
import FDMPrinters from '../components/products/FDMPrinters';
import ResinPrinters from '../components/products/resinPrinters';
import Filament from '../components/products/filament';
import Resin from '../components/products/resin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
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
    ],
  },
]);
