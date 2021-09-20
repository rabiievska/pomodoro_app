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
    currentTimeLeftInSession--;
    displayCurrentTime();
  }, 1000)

  const toggleTimer = (reset) => {
    if (reset) {
      // STOP THE TIMER
      stopTimer();
    } else {
      if (isTimerRunning === true) {
         // PAUSE THE TIMER
        isTimerRunning = false;
        clearInterval(countdownTimer);
      } else {
        // START THE TIMER
        isTimerRunning = true;
        countdownTimer();
      }
    }
  };

  const stopTimer = () => {
    clearInterval(countdownTimer);
    isTimerRunning = false;
    currentTimerSession = workSessionDuration;
    displayCurrentTimeLeftInSession();
  };

  // //START
  // startButton.addEventListener('click', () => {
  //   startWorkTimer = setInterval(() => {
  //     const secondsLeft = currentTimerSession--;

  //     const seconds = secondsLeft % 60;
  //     const minutes = parseInt(secondsLeft / 60) % 60;

  //     function addLeadingZeroes(time) {
  //       return time < 10 ? `0${time}` : time;
  //     }
  //     result = `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
  //     pomodoroTimer.innerText = result.toString();
  //     isTimerRunning = true;
  //   }, 1000);
  // });

  // // STOP
  // stopButton.addEventListener('click', () => {
  //   currentTimerSession = breakSessionDuration;
  //   startPauseTimer = setInterval(() => {
  //     clearInterval(startWorkTimer);
  //     const secondsLeft = breakSessionDuration--;

  //     const seconds = secondsLeft % 60;
  //     const minutes = parseInt(secondsLeft / 60) % 60;

  //     function addLeadingZeroes(time) {
  //       return time < 10 ? `0${time}` : time;
  //     }
  //     result = `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
  //     pomodoroTimer.innerText = result.toString();
  //     isTimerRunning = true;
  //   }, 1000);
  // });

  // // PAUSE
  // pauseButton.addEventListener('click', () => {
  //   pauseTimer = () => {
  //     isTimerRunning = false;
  //     clearInterval(currentTimerSession);
  //   }
  // });

});
