import styles from './Carte.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Header from 'components/Header';

export default function Carte() {
  return (
    <main>
      <nav className={styles.carte}>
        <Logo />
      </nav>
      <Header />
    </main>
  );
}
