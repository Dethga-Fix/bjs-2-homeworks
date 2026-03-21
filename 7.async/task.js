class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

// тут проверяем... => добавляем новый звонок
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      time: time,
      callback: callback,
      canCall: true
    });
  }
// Чистим звонки (принимаем t)
  removeClock(time) {
  const newAlarmCollection = [];
  
  for (const alarm of this.alarmCollection) {
    if (alarm.time !== time) {
      newAlarmCollection.push(alarm);
    }
  }
  
  this.alarmCollection = newAlarmCollection;
}

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`; //return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    //Интервал - True
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      
      // Перебираем и проверяем, надо ли запустить звонок
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    // Интервал - Fallse
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    // Сбрасываем возможность запуска всех звонков
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }
// Интервал - Fallse и Очищаем collection
  clearAlarms() { 
    this.stop();
    // Очищаем коллекцию звонков
    this.alarmCollection = [];
  }
}
//Было много путаницы, поэтому писал комменты себе. 
//Если это вредит сданной работе то очищу.