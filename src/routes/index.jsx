/** @format */

import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import Login from '../components/login';
import SignUp from '../components/signup';
import Products from '../components/products';

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
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'products',
    element: <Products />,
  },
]);
