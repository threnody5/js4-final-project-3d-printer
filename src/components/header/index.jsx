/** @format */

import NavRoute from '../../routes/navRoute';
import { Outlet } from 'react-router-dom';
import ToggleTheme from '../toggleTheme';

const Header = () => {
  return (
    <div>
      <NavRoute />
      <ToggleTheme />
      <Outlet />
    </div>
  );
};

export default Header;
