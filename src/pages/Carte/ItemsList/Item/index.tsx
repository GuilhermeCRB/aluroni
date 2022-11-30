import { memo } from 'react';

import { Dish } from 'types/Dish';
import styles from './Item.module.scss';
import DishTags from 'components/DishTags';

function Item(props: Dish) {
  const { title, description, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt="imagem" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <DishTags {...props} />
      </div>
    </div>
  );
}

export default memo(Item);
