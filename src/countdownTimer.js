import { displayCurrentTime } from './displayCurrentTime.js';
import { stopCurrentTimer } from './stopCurrentTimer.js';

export let countdownTimer = (currentTimerSession) => {
  setInterval(() => {
    if (currentTimerSession > 0) {
      currentTimerSession--;
      displayCurrentTime(currentTimerSession);
    } else {
      stopCurrentTimer(currentTimerSession, isWorkingTimer); // we don't want to have isWorkingTimer in this file
    }
  }, 1000);
};
