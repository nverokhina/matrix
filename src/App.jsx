import { calculate } from './utilities';
import styles from './App.module.css';
import matrixConfig from './utilities/matrix-config';

function App() {
  const calc = () => {
    const res = calculate('25.12.1987');
    console.log('res:', res, matrixConfig);
  };

  return (
    <main class={styles.main}>
      <div class={styles.infoSection}>
        <div class={styles.infoCard}>
          <h2>
           Введите дату рождения
          </h2>
          <div class={styles.dateInput}>
            <label for="date">Дата рождения</label>
            <input type="text" id='date'/>
          </div>
          <div>
          <button onClick={calc} class="">Рассчитать</button>
          </div>
        </div>
      </div>
      <div class={styles.matrixWrapper}>
        <div class={styles.info}>
          <p>
            Дата рождения: <span>17.01.1985</span>
          </p>
          <p>
            Доп. числа: <span>44 22 11</span>
          </p>
        </div>
        <div class={styles.matrixGrid}>
          <div class={styles.fateNumber}>
            Число судьбы: <span>5</span>
          </div>
          <div class={styles.grid}>
            <div class={styles.card}>
              <div class={styles.cardHeader}>
                <div class={styles.cardIcon}>icon</div>
                <div>Темперамент</div>
              </div>
              <div class={styles.cardBody}>
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
