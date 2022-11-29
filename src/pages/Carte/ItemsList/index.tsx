import { useEffect, useState } from 'react';

import styles from './Items.module.scss';
import carte from 'data/items.json';
import Item from './Item';

interface Props {
  search: string;
  filter: number | null;
  orderBy: string;
}

export default function ItemsList(props: Props) {
  const [list, setList] = useState(carte);
  const { search, filter, orderBy } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function orderList(newList: typeof carte) {
    if (orderBy === 'porcao') orderPropertie(newList, 'size');
    if (orderBy === 'qtd_pessoas') orderPropertie(newList, 'serving');
    if (orderBy === 'preco') orderPropertie(newList, 'price');
    return newList;
  }

  function orderPropertie(list: typeof carte, propertie: 'size' | 'serving' | 'price') {
    return list.sort((a, b) => (a[propertie] > b[propertie] ? 1 : -1));
  }

  useEffect(() => {
    const newList = carte.filter((item) => testSearch(item.title) && testFilter(item.category.id));
    setList(orderList(newList));
  }, [search, filter, orderBy]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
