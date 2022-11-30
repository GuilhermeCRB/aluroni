import { useNavigate } from 'react-router-dom';

import { ReactComponent as NotFoundImage } from 'assets/NotFound/not_found.svg';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './NotFound.module.scss';
import classNames from 'classnames';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={classNames([styles.container], [stylesTheme.container])}>
      <div className={styles.back}>
        <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
      </div>
      <NotFoundImage />
    </div>
  );
}
