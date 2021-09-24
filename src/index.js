window.addEventListener("load", function () {

  const pomodoroTimer = document.querySelector('#pomodoro-timer');
  const startButton = document.querySelector('#pomodoro-start');
  const pauseButton = document.querySelector('#pomodoro-pause');
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

  type = type === 'Work' ? 'Break' : 'Work';

  const displayCurrentTime = () => {
    const secondsLeft = currentTimerSession;
    let result = ''

    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;

    let hours = parseInt(secondsLeft / 3600);

    function addLeadingZeroes(time) {
      return time < 10 ? `0${time}` : time;
    }

    if (hours > 0) result += `${hours}:`

    result = `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    pomodoroTimer.innerText = result.toString();
  };

  let countdownTimer = setInterval(() => {
    stepDown();
    displayCurrentTime();
  }, 1000)

  const toggleTimer = (reset) => {
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
        clockTimer = setInterval(() => {
          stepDown();
          displayCurrentTime();
        }, 1000)
        isTimerRunning = true;
      }
    }
  };

  const stepDown = () => {
    if (currentTimerSession > 0) {
      currentTimerSession--;
      timeSpentInCurrentSession++;
    } else if (currentTimerSession === 0) {
      timeSpentInCurrentSession = 0;
      if (type === 'Work') {
        currentTimerSession = breakSessionDuration;
        displaySessionLog('Work');
        type = 'Break';
      } else {
        currentTimerSession = workSessionDuration;
        type = 'Work';
        displaySessionLog('Break');
      }
    }
    displayCurrentTime();
  };

  const stopTimer = () => {
    setUpdatedTimers();
    displaySessionLog(type);
    clearInterval(countdownTimer);
    isTimerStopped = true;
    isTimerRunning = false;
    currentTimerSession = workSessionDuration;
    displayCurrentTime();
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

  // PAUSE
  pauseButton.addEventListener('click', () => {
    toggleTimer();
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

});
