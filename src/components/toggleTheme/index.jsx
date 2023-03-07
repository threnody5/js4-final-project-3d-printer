/** @format */

import { switchTheme } from '../../theme/themeSlice';
import { useSelector, useDispatch } from 'react-redux';

const ToggleTheme = () => {
  const themeState = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() =>
          dispatch(switchTheme(themeState === 'light' ? 'dark' : 'light'))
        }
      >
        Switch Theme
      </button>
      {themeState}
    </>
  );
};

export default ToggleTheme;
