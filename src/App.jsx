import { calculate } from './utilities';
import styles from './App.module.css';
import matrixConfig from './utilities/matrix-config';

function App() {
  const calc = () => {
    const res = calculate('25.12.1987');
    console.log('res:', res, matrixConfig);
  };

  return (
    <main className={styles.main}>
      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>
           Введите дату рождения
          </h2>
          <div className={styles.dateInput}>
            <label htmlFor="date">Дата рождения</label>
            <input type="text" id='date'/>
          </div>
          <div>
          <button onClick={calc} className="">Рассчитать</button>
          </div>
        </div>
      </div>
      <div className={styles.matrixWrapper}>
        <div className={styles.info}>
          <p>
            Дата рождения: <span>17.01.1985</span>
          </p>
          <p>
            Доп. числа: <span>44 22 11</span>
          </p>
        </div>
        <div className={styles.matrixGrid}>
          <div className={styles.fateNumber}>
            Число судьбы: <span>5</span>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>icon</div>
                <div>Темперамент</div>
              </div>
              <div className={styles.cardBody}>
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
