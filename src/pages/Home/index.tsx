import carte from 'data/items.json';
import styles from './Home.module.scss';

export default function Home() {
  let recommendedDishes = [...carte];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommendations}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommendation}>
            <div className={styles.recommendation__imag}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommendation__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}