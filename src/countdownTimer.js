import { displayCurrentTime } from './displayCurrentTime.js';

export let countdownTimer = setInterval(() => {
  displayCurrentTime(currentTimerSession);
}, 1000);
