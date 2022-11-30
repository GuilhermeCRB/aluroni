import { useNavigate, useParams } from 'react-router-dom';

import carte from 'data/items.json';
import styles from './Dish.module.scss';
import DishTags from 'components/DishTags';

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = carte.find((item) => item.id === Number(id));
  if (!dish) return <></>;

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.contento__description}>{dish.description}</p>
          <DishTags {...dish} />
        </div>
      </section>
    </>
  );
}
