import { displayCurrentTime } from './displayCurrentTime.js';
import { toggleTimer } from './toggleTimer.js';
import { displaySessionLog } from './displaySessionLog.js';
import { showStopIcon } from './showStopIcon.js';
import { togglePlayPauseIcon } from './togglePlayPauseIcon.js';
import { minuteToSeconds } from './minuteToSeconds.js';
import { countdownTimer } from './countdownTimer.js';
import { WORK_SESSION_DURATION, BREAK_SESSION_DURATION } from './constants.js'

window.addEventListener("load", function () {

  const startButton = document.querySelector('#pomodoro-start');
  const stopButton = document.querySelector('#pomodoro-stop');

  // in seconds = 25 mins
  let workSessionDuration = 1500;
  // in seconds = 5 mins;
  let breakSessionDuration = 300;

  let currentTimerSession = 1500;

  let isTimerRunning = false;
  let isTimerStopped = true;

  let type = 'Work';

  let timeSpentInCurrentSession = 0;

  let updatedWorkSessionDuration;
  let updatedBreakSessionDuration;
  let workDurationInput = document.querySelector('#input-work-duration');
  let breakDurationInput = document.querySelector('#input-break-duration');
  workDurationInput.value = '25';
  breakDurationInput.value = '5';

  // type = type === 'Work' ? 'Break' : 'Work';

  const stopTimer = () => {
    setUpdatedTimers();
    displaySessionLog(type);
    clearInterval(countdownTimer);
    isTimerStopped = true;
    isTimerRunning = false;
    currentTimerSession = workSessionDuration;
    displayCurrentTime(currentTimerSession);
    type = 'Work';
    timeSpentInCurrentSession = 0;
  };

  //START
  startButton.addEventListener('click', () => {
    toggleTimer(true, togglePlayPauseIcon(reset), stopTimer, isTimerStopped, setUpdatedTimers, isTimerRunning, countdownTimer, showStopIcon);
  });

  // STOP
  stopButton.addEventListener('click', () => {
    toggleTimer(true, togglePlayPauseIcon(reset), stopTimer, isTimerStopped, setUpdatedTimers, isTimerRunning, countdownTimer, showStopIcon);
  });

  workDurationInput.addEventListener('input', () => {
    updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value);
  });

  breakDurationInput.addEventListener('input', () => {
    updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value);
  });

  const setUpdatedTimers = () => {
    if (type === 'Work') {
      currentTimerSession = updatedWorkSessionDuration ? updatedWorkSessionDuration : workSessionDuration;
      workSessionDuration = currentTimerSession;
    } else {
      currentTimerSession = updatedBreakSessionDuration ? updatedBreakSessionDuration : breakSessionDuration;
      workSessionDuration = currentTimerSession;
    }
  };
});
