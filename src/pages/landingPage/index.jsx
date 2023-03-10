/** @format */

import { useSelector } from 'react-redux';
import styles from './styles.modules.scss';

const LandingPage = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    // <div theme={theme}>
    <div className='landingPageHero'>
      Landing Page Works
      {/* <img src={'./../../../public/assets/best-3D-printer.jpg'} /> */}
    </div>
    // </div>
  );
};

export default LandingPage;
