import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { format, isValid } from 'date-fns';
import { ru } from 'date-fns/locale';
import { calculate } from './utilities';
import styles from './App.module.css';
import matrixConfig from './utilities/matrix-config';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru ', ru);

function App() {
  const [startDate, setStartDate] = useState();
  const [error, setError] = useState();
  const [result, setResult] = useState({});

  const calc = () => {
    if (!startDate || error) return;
    const res = calculate(format(startDate || new Date(), 'dd.MM.yyyy'));
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
          <h2>
           Введите дату рождения
          </h2>
          <div className={styles.dateInput}>
            <label htmlFor="date">Дата рождения</label>
            <DatePicker
              selected={startDate}
              maxDate={new Date()}
              minDate={new Date('01.01.1900')}
              onChange={(date) => {
                if (isValid(date)) {
                  setStartDate(date);
                  setError(false);
                } else {
                  setError(true);
                }
              }}
              locale={ru}
              dateFormat="dd.MM.yyyy"
              placeholderText='ДД.ММ.ГГГГ'
              className={error ? 'error' : ''}
            />
          </div>
          <div>
          <button onClick={calc} disabled={!startDate}>Рассчитать</button>
          </div>
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
