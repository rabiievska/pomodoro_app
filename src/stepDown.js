const stepDown = (currentTimerSession, timeSpentInCurrentSession, type, displaySessionLog) => {
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
  displayCurrentTime();
};

export default stepDown;
