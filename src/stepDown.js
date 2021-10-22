import { displayCurrentTime } from './displayCurrentTime.js';

export const stepDown = (currentTimerSession, timeSpentInCurrentSession, type, displaySessionLog, workSessionDuration) => {
  if (currentTimerSession > 0) {
    currentTimerSession--;
    timeSpentInCurrentSession++;
  } else if (currentTimerSession === 0) {
    timeSpentInCurrentSession = 0;
    if (type === 'Work') {
      currentTimerSession = workSessionDuration;
      displaySessionLog('Work');
      type = 'Break';
    } else {
      currentTimerSession = breakSessionDuration;
      type = 'Work';
      displaySessionLog('Break');
    }
  }
  displayCurrentTime(currentTimerSession);
  return {
    currentTimerSession,
    timeSpentInCurrentSession
  }
};
