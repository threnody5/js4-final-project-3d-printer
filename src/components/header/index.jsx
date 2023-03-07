/** @format */

import NavRoute from '../../routes/navRoute';
import { Outlet } from 'react-router-dom';
import ToggleTheme from '../toggleTheme';
import { useSelector } from 'react-redux';
import { AiTwotoneTool } from 'react-icons/ai';
import styles from './styles.module.scss';

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div>
      <div
        theme={theme}
        className={styles.headerWrapper}
      >
        {/* <AiTwotoneTool
          className={styles.iconStyle}
          theme={theme}
        /> */}
        <NavRoute />
        <ToggleTheme />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
