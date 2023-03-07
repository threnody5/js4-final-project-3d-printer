/** @format */

import { RouterProvider } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { router } from './routes/index';
import './styles.module.scss';

const App = () => {
  //   const ThemeProvider = ({ children }) => {
  //     const theme = useSelector((state) => state.theme.value);
  //     return <div theme={theme}>{children}</div>;
  //   };

  return <RouterProvider router={router} />;
};

export default App;
