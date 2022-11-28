import { useState } from 'react';

import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Carte.module.scss';
import Header from 'components/Header';
import SearchBar from './SearchBar';

export default function Carte() {
  const [busca, setBusca] = useState('');

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <Header />
      <section className={styles.carte}>
        <h3 className={styles.carte__title}>Cardápio</h3>
        <SearchBar busca={busca} setBusca={setBusca} />
      </section>
    </main>
  );
}
