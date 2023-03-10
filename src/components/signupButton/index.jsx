/** @format */

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const SignUpButton = () => {
  const theme = useSelector((state) => state.theme.value);

  return <button className={'signUpButton'}>Sign Up</button>;
};

// `${styles[theme]} ${styles.signUpButton}`

export default SignUpButton;
