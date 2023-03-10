/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index';
import { BrowserRouter as Router } from 'react-router-dom';

// import { useSelector } from 'react-redux';
import App from './App';
import './styles.module.scss';

// const ThemeProvider = ({ children }) => {
//   const theme = useSelector((state) => state.theme.value);
//   return <div background={theme}>{children}</div>;
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router}> */}
      <Router>
        <App />
      </Router>
      {/* </RouterProvider> */}
      {/* <ThemeProvider> */}
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
