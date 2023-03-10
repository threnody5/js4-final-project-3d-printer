/** @format */

// import { RouterProvider } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Header from './components/header';
// import { router } from './routes/index';
import './styles.module.scss';

import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingPage';
import Login from './pages/login';
import SignUp from './pages/signup';
import Products from './pages/products';
import ContactUs from './pages/contactUs';
import FDMPrinters from './pages/products/FDMPrinters';
import ResinPrinters from './pages/products/resinPrinters';
import Filament from './pages/products/filament';
import Resin from './pages/products/resin';
import AboutUs from './pages/aboutUs';

const App = () => {
  // const ThemeProvider = ({ children }) => {
  //   const theme = useSelector((state) => state.theme.value);
  //   return <div theme={theme}>{children}</div>;
  // };

  return (
    // <ThemeProvider>
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='sign-up'
          element={<SignUp />}
        />
        <Route
          path='products'
          element={<Products />}
        >
          <Route
            path='fdm-printers'
            element={<FDMPrinters />}
          />
          <Route
            path='resin-printers'
            element={<ResinPrinters />}
          />
          <Route
            path='filament'
            element={<Filament />}
          />
          <Route
            path='resin'
            element={<Resin />}
          />
        </Route>
        <Route
          path='contact-us'
          element={<ContactUs />}
        />
        <Route
          path='about-us'
          element={<AboutUs />}
        />
      </Routes>
    </>
  );
};

export default App;
