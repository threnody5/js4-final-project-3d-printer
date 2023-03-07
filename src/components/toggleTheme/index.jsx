/** @format */

import { switchTheme } from '../../theme/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
// import './styles.module.scss';
import styles from './styles.module.scss';

const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.button}
        theme={theme}
        onClick={() =>
          dispatch(switchTheme(theme === 'light' ? 'dark' : 'light'))
        }
      >
        {theme === 'light' ? (
          <BsFillMoonFill
            className={styles.iconStyle}
            theme={theme}
          />
        ) : (
          <BsFillSunFill
            className={styles.iconStyle}
            theme={theme}
          />
        )}
      </button>
    </div>
  );
};

export default ToggleTheme;
