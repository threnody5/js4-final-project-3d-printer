/** @format */

import NavRoute from '../../routes/navRoute';
import { Outlet } from 'react-router-dom';
import ToggleTheme from '../toggleTheme';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div theme={theme}>
      <div className={styles.headerWrapper}>
        <NavRoute />
        <ToggleTheme />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
