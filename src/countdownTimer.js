import { displayCurrentTime } from './displayCurrentTime.js';

export let countdownTimer = (currentTimerSession) => {
  setInterval(() => {
    currentTimerSession--;
    displayCurrentTime(currentTimerSession);
  }, 1000);
};
