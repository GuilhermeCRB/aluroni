import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import carte from 'data/items.json';
import styles from './Dish.module.scss';

export default function Dish() {
  const { id } = useParams();
  const dish = carte.find((item) => item.id === Number(id));
  if (!dish) return <></>;

  return (
    <>
      <button className={styles.back}>{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.contento__description}>{dish.description}</p>
          <div className={styles.tags}>
            <div
              className={classNames([styles.tags__type], [styles[`tags__type__${dish.category.label.toLowerCase()}`]])}
            >
              {dish.category.label}
            </div>
            <div className={styles.tags__portion}>{dish.size}g</div>
            <div className={styles.tags__qtdpeople}>
              Serve {dish.serving} pessoa {dish.serving == 1 ? '' : 's'}
            </div>
            <div className={styles.tags__price}>R$ {dish.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
