import { useState } from 'react';
import InputMask from 'react-input-mask';
import { calculate } from './utilities';
import styles from './App.module.css';
import matrixConfig from './utilities/matrix-config';

function App() {
  const [startDate, setStartDate] = useState();
  const [result, setResult] = useState({});

  const calc = () => {
    if (!startDate || !startDate.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/g)) return;
    const res = calculate(startDate);
    setResult(res);
  };

  return (
    <main className={styles.main}>
      <div className={styles.author}>
        <p>Надежда Ерохина</p>
        <p className={styles.title}>нумеролог</p>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
        <form onSubmit={(e) => {
          e.preventDefault();
          calc();
        }}>
          <h2>
           Введите дату рождения
          </h2>
          <div className={styles.dateInput}>
            <label htmlFor="date">Дата рождения</label>
            <InputMask
              mask="99.99.9999"
              value={startDate}
                onChange={(e) => {
                  setStartDate(e?.target?.value);
                }}
              placeholder="ДД.ММ.ГГГГ"
            />
          </div>
          <div>
            <button onClick={calc} disabled={!startDate} type='submit'>Рассчитать</button>
          </div>
        </form>
        </div>
      </div>
      <div className={styles.matrixWrapper}>
        {Object.keys(result).length > 0 ? (
          <>
            <div className={styles.info}>
              <p>
                Дата рождения: <span>{result.valueDate}</span>
              </p>
              <p>
                Доп. числа: <span>{result.numberAdditionalNumber}</span>
              </p>
            </div>
            <div className={styles.matrixGrid}>
              <div className={styles.fateNumber}>
                Число судьбы: <span>{result.numberFate}</span>
              </div>
              <div className={styles.grid}>
                {Object.keys(result).length > 0 && matrixConfig.map((column, idx) => (
                  <div className={styles.gridColumn} key={idx}>
                    {column.map((card, index) => (!card ? <div key={index}/> : (
                      <div className={card.isLong ? styles.cardLong : styles.card} key={card.path}>
                        <div className={styles.cardHeader}>
                          <div>{card.label}</div>
                        </div>
                        <div className={styles.cardBody}>
                          {result[card.path]}
                        </div>
                      </div>
                    )))}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.noResults}>
            Рассчитайте Ваше число судьбы!
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
