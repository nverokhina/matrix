import { calculate } from './utilities';
import styles from './App.module.css';

function App() {
  const calc = () => {
    const res = calculate('25.12.1987');
    console.log('res:', res);
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
      <div class="matrix">
        <div class="info">
          <div>
            current date
          </div>
          <div>
          additional number
          </div>
        </div>
        <div class="matrix">
          matrix grid
        </div>
      </div>
    </main>
  );
}

export default App;
