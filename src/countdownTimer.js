import { displayCurrentTime } from './displayCurrentTime.js';
import { stopCurrentTimer } from './stopCurrentTimer.js';

export let countdownTimer = (currentTimerSession) => {
  setInterval(() => {
    if (currentTimerSession >= 0) {
      displayCurrentTime(currentTimerSession);
      currentTimerSession--;
    } else {
      stopCurrentTimer(); 
    }
  }, 1000);
};
