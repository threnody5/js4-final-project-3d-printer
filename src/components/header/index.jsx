/** @format */

import NavRoute from '../../routes/navRoute';
import { Outlet } from 'react-router-dom';
import ToggleTheme from '../toggleTheme';
import SignUpButton from '../signupButton';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    // <div theme={theme}>
    <div>
      <div className={styles.headerWrapper}>
        <NavRoute className={styles.navRouteContainer} />
        <SignUpButton />
        <ToggleTheme />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
