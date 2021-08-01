window.addEventListener("load", function () {

  const pomodoroTimer = document.querySelector('#pomodoro-timer');
  const startButton = document.querySelector('#pomodoro-start');
  const pauseButton = document.querySelector('#pomodoro-pause');
  const stopButton = document.querySelector('#pomodoro-stop');

  // in seconds = 25 mins
  let workSessionDuration = 1500;
  let currentTimeLeftInSession = 1500;
  // in seconds = 5 mins;
  let breakSessionDuration = 300;

  // START
  startButton.addEventListener('click', () => {
    setInterval(() => {
      const secondsLeft = currentTimeLeftInSession--;

      const seconds = secondsLeft % 60;
      const minutes = parseInt(secondsLeft / 60) % 60;

      function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time;
      }
      result = `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
      pomodoroTimer.innerText = result.toString();
    }, 1000);
  });

});
