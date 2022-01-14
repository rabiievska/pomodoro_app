// export const displayCurrentTime = (currentTimerSession) => {
//   const pomodoroTimer = document.querySelector('#pomodoro-timer');
//   const secondsLeft = currentTimerSession;
//   let result = ''

//   const seconds = secondsLeft % 60;
//   const minutes = parseInt(secondsLeft / 60) % 60;

//   let hours = parseInt(secondsLeft / 3600);

//   function addLeadingZeroes(time) {
//     return time < 10 ? `0${time}` : time;
//   }

//   if (hours > 0) result += `${hours}:`

//   result = `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
//   pomodoroTimer.innerText = result.toString();
// };
