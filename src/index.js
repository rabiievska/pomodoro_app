window.addEventListener("load", function () {
  document.querySelector('#name').addEventListener("keyup", e => {
    document.querySelector('#greet').innerHTML = 'Hello ' + document.querySelector('#name').value;
  }); 
  
  const pomodoroTimer = document.querySelector('#pomodoro-timer');
  const startButton = document.querySelector('#pomodoro-start');
  const pauseButton = document.querySelector('#pomodoro-pause');
  const stopButton = document.querySelector('#pomodoro-stop');

  let isClockRunning = false;

  // in seconds = 25 mins
  let workSessionDuration = 1500;
  let currentTimeLeftInSession = 1500;
  // in seconds = 5 mins;
  let breakSessionDuration = 300;

  // START
  startButton.addEventListener('click', () => {
    toggleClock();
  });

  // PAUSE
  pauseButton.addEventListener('click', () => {
    toggleClock();
  });

  // STOP
  stopButton.addEventListener('click', () => {
    toggleClock(true);
  });

  const toggleClock = (reset) => {
    if (reset) {
      // STOP THE TIMER
    } else {
      if (isClockRunning === true) {
        // PAUSE THE TIMER
        clearInterval(clockTimer);
        isClockRunning = false;
      } else {
        // START THE TIMER
        clockTimer = setInterval(() => {
          // decrease time left / increase time spent
          currentTimeLeftInSession -= 1;
        }, 1000);
        isClockRunning = true;
      }
    }
  };
});
