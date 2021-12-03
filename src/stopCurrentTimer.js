export const stopCurrentTimer = (currentTimerSession, isWorkingTimer) => {
  if (isWorkingTimer) {
    isWorkingTimer = false
    clearInterval(currentTimerSession);
  } else {
    isWorkingTimer = true;
  }
};
