import { useState } from 'react';

import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Carte.module.scss';
import Header from 'components/Header';
import SearchBar from './SearchBar';
import Filters from './Filters';
import OrderBy from './OrderBy';
import ItemsList from './ItemsList';

export default function Carte() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [orderBy, setOrderBy] = useState('');

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <Header />
      <section className={styles.carte}>
        <h3 className={styles.carte__title}>Cardápio</h3>
        <SearchBar search={search} setSearch={setSearch} />
        <div className={styles.carte__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
        </div>
        <ItemsList />
      </section>
    </main>
  );
}
