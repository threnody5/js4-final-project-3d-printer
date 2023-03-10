/** @format */

import { RouterProvider } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Header from './components/header';
import { router } from './routes/index';
import './styles.module.scss';

const App = () => {
  // const ThemeProvider = ({ children }) => {
  //   const theme = useSelector((state) => state.theme.value);
  //   return <div theme={theme}>{children}</div>;
  // };

  return (
    // <ThemeProvider>
    <>
      <Header />
      <RouterProvider router={router}>
        {/* <Header /> */}
        <div>content</div>
      </RouterProvider>
    </>
    // </ThemeProvider>
  );
};

export default App;
