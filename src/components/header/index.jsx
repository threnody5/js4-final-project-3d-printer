/** @format */

import NavRoute from '../../routes/navRoute';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavRoute />
      <Outlet />
    </div>
  );
};

export default Header;
