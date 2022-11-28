import carte from './items.json';
import Item from './Item';
import styles from './Items.module.scss';

export default function ItemsList() {
  return (
    <div className={styles.items}>
      {carte.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
