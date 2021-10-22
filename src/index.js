import { stepDown } from './stepDown.js';
import { displayCurrentTime } from './displayCurrentTime.js';

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

  let countdownTimer = setInterval(() => {
    displayCurrentTime(currentTimerSession);
  }, 1000)

  const toggleTimer = (reset) => {
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

  const displaySessionLog = (type) => {
    const sessionsList = document.querySelector('#pomodoro-sessions');
    const li = document.createElement('li');
    let sessionLabel = type;
    let elapsedTime = parseInt(timeSpentInCurrentSession / 60);
    elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';
    const text = document.createTextNode(`${sessionLabel} : ${elapsedTime} min`);
    li.appendChild(text);
    sessionsList.appendChild(li);
  }

  //START
  startButton.addEventListener('click', () => {
    toggleTimer();
  });

  // STOP
  stopButton.addEventListener('click', () => {
    toggleTimer(true);
  });

  workDurationInput.addEventListener('input', () => {
    updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value);
  });

  breakDurationInput.addEventListener('input', () => {
    updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value);
  });

  const minuteToSeconds = (mins) => {
    return mins * 60;
  };

  const setUpdatedTimers = () => {
    if (type === 'Work') {
      currentTimerSession = updatedWorkSessionDuration ? updatedWorkSessionDuration : workSessionDuration;
      workSessionDuration = currentTimerSession;
    } else {
      currentTimerSession = updatedBreakSessionDuration ? updatedBreakSessionDuration : breakSessionDuration;
      workSessionDuration = currentTimerSession;
    }
  };

  const togglePlayPauseIcon = (reset) => {
    const playIcon = document.querySelector('#play-icon');
    const pauseIcon = document.querySelector('#pause-icon');
    if (reset) {
      // when resetting -> always revert to play icon
      if (playIcon.classList.contains('hidden')) {
        playIcon.classList.remove('hidden');
      }
      if (!pauseIcon.classList.contains('hidden')) {
        pauseIcon.classList.add('hidden');
      }
    } else {
      playIcon.classList.toggle('hidden');
      pauseIcon.classList.toggle('hidden');
    }
  };

  const showStopIcon = () => {
    const stopButton = document.querySelector('#pomodoro-stop');
    stopButton.classList.remove('hidden');
  };
  

});
