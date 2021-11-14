import { stepDown } from './stepDown.js';
import { displayCurrentTime } from './displayCurrentTime.js';

export const toggleTimer = (reset, togglePlayPauseIcon, stopTimer, isTimerStopped, setUpdatedTimers, isTimerRunning, countdownTimer, showStopIcon) => {
  togglePlayPauseIcon(reset);
  if (reset) {
    // STOP THE TIMER
    stopTimer();
  } else {
    if (isTimerStopped) {
      setUpdatedTimers();
      isTimerStopped = false;
    }
    if (isTimerRunning === true) {
       // PAUSE THE TIMER
       clearInterval(countdownTimer);
       isTimerRunning = false;
    } else {
      // START THE TIMER
      countdownTimer = setInterval(() => {
        ({ currentTimerSession, timeSpentInCurrentSession } = stepDown(currentTimerSession, timeSpentInCurrentSession, type, displaySessionLog, workSessionDuration));
        displayCurrentTime(currentTimerSession);
      }, 1000)
      isTimerRunning = true;
    }
    showStopIcon();
  }
};
