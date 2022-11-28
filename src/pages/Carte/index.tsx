import styles from './Carte.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Carte() {
  return (
    <main>
      <nav className={styles.carte}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
    </main>
  );
}
