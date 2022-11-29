import { useEffect, useState } from 'react';

import styles from './Items.module.scss';
import carte from './items.json';
import Item from './Item';

interface Props {
  search: string;
  filter: number | null;
  orderBy: string;
}

export default function ItemsList(props: Props) {
  const [list, setList] = useState(carte);
  const { search, filter } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  useEffect(() => {
    const newList = carte.filter((item) => testSearch(item.title) && testFilter(item.category.id));
    setList(newList);
  }, [search, filter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
