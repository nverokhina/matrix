/* eslint-disable no-plusplus */
/* eslint-disable radix */

export const calculate = (dateOfBirth) => {
  let arr;

  const strDate = `${dateOfBirth}`;
  const aDate = strDate.split('.');
  if (aDate.length !== 3) {
    return { error: 'Не верный формат даты! Пример: 01.01.2020' };
  }

  const nDay = parseInt(aDate[0]);
  const nMonth = parseInt(aDate[1]);
  const nYear = parseInt(aDate[2]);

  // Доп. числа
  // Первое число
  let numberOne = 0;
  if (nDay < 10) {
    numberOne += nDay;
  } else {
    arr = (`${nDay}`).split('');
    for (let i = 0; i < arr.length; i++) {
      numberOne += parseInt(arr[i]);
    }
  }
  if (nMonth < 10) {
    numberOne += nMonth;
  } else {
    arr = (`${nMonth}`).split('');
    for (let i = 0; i < arr.length; i++) {
      numberOne += parseInt(arr[i]);
    }
  }
  arr = (`${nYear}`).split('');
  for (let i = 0; i < arr.length; i++) {
    numberOne += parseInt(arr[i]);
  }
  numberOne = parseInt(numberOne);
  // Второе число
  let numberTwo = 0;
  if (numberOne < 10) {
    numberTwo = numberOne;
  } else {
    arr = (`${numberOne}`).split('');
    for (let i = 0; i < arr.length; i++) {
      numberTwo += parseInt(arr[i]);
    }
  }
  numberTwo = parseInt(numberTwo);
  // Третье число
  let numberThree = 0;
  if (nDay < 10) {
    numberThree = numberOne - (2 * nDay);
  } else {
    arr = (`${nDay}`).split('');
    numberThree = numberOne - (2 * arr[0]);
  }
  numberThree = parseInt(numberThree);
  // Четвертое число
  let numberFour = 0;
  if (numberThree < 10) {
    numberFour = numberThree;
  } else {
    arr = (`${numberThree}`).split('');
    for (let i = 0; i < arr.length; i++) {
      numberFour += parseInt(arr[i]);
    }
  }
  numberFour = parseInt(numberFour);

  // Число судьбы
  let numberFate = 0;
  arr = (`${numberOne}`).split('');
  for (let i = 0; i < arr.length; i++) {
    numberFate += parseInt(arr[i]);
  }

  for (let i = 0; i < 99; i++) {
    if (numberFate < 10 || numberFate === 11) {
      break;
    }
    arr = (`${numberFate}`).split('');
    numberFate = 0;
    for (let j = 0; j < arr.length; j++) {
      numberFate += parseInt(arr[j]);
    }
  }

  // Квадрат пифагора
  const strNumberAll = `${nDay}${nMonth}${nYear}${numberOne}${numberTwo}${numberThree}${numberFour}`;
  arr = strNumberAll.split('');

  // Характер
  let character = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 1) {
      character += arr[i];
    }
  }
  // Энергия
  let energy = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 2) {
      energy += arr[i];
    }
  }
  // Интерес
  let interest = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 3) {
      interest += arr[i];
    }
  }
  // Здоровье
  let health = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 4) {
      health += arr[i];
    }
  }
  // Логика
  let logics = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 5) {
      logics += arr[i];
    }
  }
  // Труд
  let work = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 6) {
      work += arr[i];
    }
  }
  // Удача
  let luck = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 7) {
      luck += arr[i];
    }
  }
  // Долг
  let debt = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 8) {
      debt += arr[i];
    }
  }
  //  Память
  let memory = '';
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 9) {
      memory += arr[i];
    }
  }

  // Темперамент
  const temperament = interest.length + logics.length + luck.length;

  // Быт
  const everyday = health.length + logics.length + work.length;

  // Цель
  const target = character.length + health.length + luck.length;

  // Семья
  const family = energy.length + logics.length + debt.length;

  // Привычки
  const habits = interest.length + work.length + memory.length;

  let day = `${nDay}`;
  if (nDay < 10) {
    day = `0${day}`;
  }
  let month = `${nMonth}`;
  if (nMonth < 10) {
    month = `0${month}`;
  }

  return {
    valueDate: `${day}.${month}.${nYear}`,
    numberAdditionalNumber: `${numberOne}.${numberTwo} ${numberThree}.${numberFour}`,
    numberFate,
    character: character || '---',
    health: health || '---',
    luck: luck || '---',
    energy: energy || '---',
    logics: logics || '---',
    debt: debt || '---',
    interest: interest || '---',
    work: work || '---',
    memory: memory || '---',
    temperament: temperament || '---',
    everyday: everyday || '---',
    target: target || '---',
    family: family || '---',
    habits: habits || '---',
  };
};

export default {
  calculate,
};
