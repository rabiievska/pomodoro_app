// import { toggleTimer } from './toggleTimer.js';
// import { showStopIcon } from './showStopIcon.js';
// import { minuteToSeconds } from './minuteToSeconds.js';
// import { countdownTimer } from './countdownTimer.js';
// import { displayCurrentTime } from './displayCurrentTime.js';
import { displaySessionLog } from './displaySessionLog.js';
import { WORK_SESSION_DURATION, BREAK_SESSION_DURATION } from './constants.js';
import { workSessionTimer } from './workSessionTimer.js';
import { stopCurrentTimer } from './stopCurrentTimer.js';
import { breakSessionTimer } from './breakSessionTimer.js';

window.addEventListener("load", function () {

  const startButton = document.querySelector('#pomodoro-start');
  const stopButton = document.querySelector('#pomodoro-stop');
  const pauseButton = document.querySelector('#pomodoro-pause');

  let workSessionDuration = WORK_SESSION_DURATION;
  let breakSessionDuration = BREAK_SESSION_DURATION;

  let currentTimerSession = workSessionDuration;

  startButton.addEventListener('click', () => {
    displaySessionLog();
    currentTimerSession = workSessionDuration;
    workSessionTimer(workSessionDuration);
    stopButton.classList.remove('hidden');
    pauseButton.classList.remove('hidden');
    startButton.classList.add('hidden');
  });

  stopButton.addEventListener('click', () => {
    displaySessionLog();
    stopCurrentTimer();
    currentTimerSession = breakSessionDuration;
    breakSessionTimer(breakSessionDuration);
    stopButton.classList.add('hidden');
    pauseButton.classList.add('hidden');
    startButton.classList.remove('hidden');
  })

  pauseButton.addEventListener('click', () => {
    pauseButton.classList.add('hidden');
    startButton.classList.remove('hidden');
    stopButton.classList.remove('hidden');
  })























  // let isTimerRunning = false;

  // let type = 'Work';

  // let timeSpentInCurrentSession = 0;

  // let updatedWorkSessionDuration;
  // let updatedBreakSessionDuration;
  // let workDurationInput = document.querySelector('#input-work-duration');
  // let breakDurationInput = document.querySelector('#input-break-duration');
  // workDurationInput.value = '25';
  // breakDurationInput.value = '5';

  // // type = type === 'Work' ? 'Break' : 'Work';

  // const stopTimer = () => {
  //   setUpdatedTimers();
  //   displaySessionLog(type);
  //   clearInterval(countdownTimer);
  //   isTimerRunning = false;
  //   currentTimerSession = workSessionDuration;
  //   displayCurrentTime(currentTimerSession);
  //   type = 'Work';
  //   timeSpentInCurrentSession = 0;
  // };

  // //START
  // startButton.addEventListener('click', () => {
  //   toggleTimer(true, togglePlayPauseIcon, stopTimer, setUpdatedTimers, isTimerRunning, countdownTimer, showStopIcon);
  // });

  // // STOP
  // stopButton.addEventListener('click', () => {
  //   toggleTimer(true, togglePlayPauseIcon, stopTimer, setUpdatedTimers, isTimerRunning, countdownTimer, showStopIcon);
  // });

  // workDurationInput.addEventListener('input', () => {
  //   updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value);
  // });

  // breakDurationInput.addEventListener('input', () => {
  //   updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value);
  // });

  // const setUpdatedTimers = () => {
  //   if (type === 'Work') {
  //     currentTimerSession = updatedWorkSessionDuration ? updatedWorkSessionDuration : workSessionDuration;
  //     workSessionDuration = currentTimerSession;
  //   } else {
  //     currentTimerSession = updatedBreakSessionDuration ? updatedBreakSessionDuration : breakSessionDuration;
  //     workSessionDuration = currentTimerSession;
  //   }
  // };
});
