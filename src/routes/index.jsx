/** @format */

import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Login from '../components/login';
import SignUp from '../components/signup';
import Products from '../components/products';
import FDMPrinters from '../components/products/FDMPrinters';
import ResinPrinters from '../components/products/resinPrinters';
import Filament from '../components/products/filament';
import Resin from '../components/products/resin';

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
]);
