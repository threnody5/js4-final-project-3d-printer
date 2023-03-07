/** @format */

import styles from './styles.modules.scss';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div theme={theme}>
      <h3>Landing page works</h3>
    </div>
  );
};

export default LandingPage;
