import { useNavigate } from 'react-router-dom';

import { Dish } from 'types/Dish';
import carte from 'data/items.json';
import nossaCasa from 'assets/nossa_casa.png';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Home.module.scss';

export default function Home() {
  let recommendedDishes = [...carte];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirectToDishPage(item: Dish) {
    navigate(`/prato/${item.id}`, { state: { ...item } });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da cozinha</h3>
      <div className={styles.recommendations}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommendation}>
            <div className={styles.recommendation__imag}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommendation__button} onClick={() => redirectToDishPage(item)}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}> Nossa casa </h3>
      <div className={styles.we}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.we__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
