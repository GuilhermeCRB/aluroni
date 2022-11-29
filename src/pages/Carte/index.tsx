import { useState } from 'react';

import styles from './Carte.module.scss';
import SearchBar from './SearchBar';
import Filters from './Filters';
import OrderBy from './OrderBy';
import ItemsList from './ItemsList';

export type OrderByOptions = '' | 'size' | 'serving' | 'price';

export default function Carte() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [orderBy, setOrderBy] = useState<OrderByOptions>('');

  return (
    <section className={styles.carte}>
      <h3 className={styles.carte__title}>Cardápio</h3>
      <SearchBar search={search} setSearch={setSearch} />
      <div className={styles.carte__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>
      <ItemsList search={search} filter={filter} orderBy={orderBy} />
    </section>
  );
}
