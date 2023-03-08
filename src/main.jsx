/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
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
      {/* <ThemeProvider> */}
      <App />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
