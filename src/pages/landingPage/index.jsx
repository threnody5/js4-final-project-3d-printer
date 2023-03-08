/** @format */

import styles from './styles.modules.scss';
import { useSelector } from 'react-redux';
// import landingPageHero from './../../assets/landing-page-hero.png';

const LandingPage = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div theme={theme}>
      <img src={'./../../assets/landing-page-hero.jpg'} />
    </div>
  );
};

export default LandingPage;
