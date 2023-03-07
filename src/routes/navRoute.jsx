/** @format */

import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const NavRoute = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <span className={styles.navWrapper}>
      <nav theme={theme}>
        <Link to={'/'}>Home</Link>
        <Link to={'contact_us'}>Contact Us</Link>
        <Link to={'about_us'}>About Us</Link>
        <Link to={'products'}>Products</Link>
      </nav>
    </span>
  );
};

export default NavRoute;
