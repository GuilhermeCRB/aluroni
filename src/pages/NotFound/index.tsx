import { ReactComponent as NotFoundImage } from 'assets/NotFound/not_found.svg';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './NotFound.module.scss';
import classNames from 'classnames';

export default function NotFound() {
  return (
    <div className={classNames([styles.container], [stylesTheme.container])}>
      <NotFoundImage />
    </div>
  );
}
