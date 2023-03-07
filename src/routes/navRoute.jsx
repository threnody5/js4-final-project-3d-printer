/** @format */

import { Link } from 'react-router-dom';

const NavRoute = () => {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'contact_us'}>Contact Us</Link>
      <Link to={'about_us'}>About Us</Link>
      <Link to={'products'}>Products</Link>
    </nav>
  );
};

export default NavRoute;
