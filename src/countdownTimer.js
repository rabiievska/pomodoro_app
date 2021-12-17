import { displayCurrentTime } from './displayCurrentTime.js';
import { stopCurrentTimer } from './stopCurrentTimer.js';

export let countdownTimer = (currentTimerSession) => {
  console.log(currentTimerSession);
  setInterval(() => {
    if (currentTimerSession >= 0) {
      currentTimerSession--;

      displayCurrentTime(currentTimerSession);
    } else {
      stopCurrentTimer(); 
    }
  }, 1000);
};
