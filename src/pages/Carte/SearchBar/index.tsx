import React from 'react';
import styles from './SearchBar.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className={styles.searchbar}>
      <input value={search} onChange={(evento) => setSearch(evento.target.value)} />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
