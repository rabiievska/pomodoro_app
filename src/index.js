
window.addEventListener("load", function () {

  let countdown = 0; // variable to set/clear intervals
  let seconds = 1500; // seconds left on the clock
  let workTime = 25;
  let breakTime = 5;
  let isBreak = true;
  let isPaused = true;

  const status = document.querySelector("#status");
  const timerDisplay = document.querySelector("#timer-display");
  const startBtn = document.querySelector("#start-btn");
  const resetBtn = document.querySelector("#reset-btn");

  const timer = () => {  
    console.log(seconds--);
    // seconds--;  
    if (seconds < 0) {    
      clearInterval(countdown);     
      seconds = (isBreak ? breakTime : workTime) * 60;    
      isBreak = !isBreak;
      countdown = setInterval(timer, 1000);  
    }
  };

  startBtn.addEventListener('click', () => {  
    clearInterval(countdown);  
    isPaused = !isPaused;  
    if (!isPaused) {    
      countdown = setInterval(timer, 1000);  
    }
    buttonDisplay();
  });

  // resetBtn.addEventListener('click', () => {  
  //   clearInterval(countdown);  
  //   seconds = workTime * 60;  
  //   countdown = 0;  
  //   isPaused = true;  
  //   isBreak = true;
  // });

  const buttonDisplay = () => {
    if (isPaused && countdown === 0) {
      startBtn.textContent = "START";
    } else if (isPaused && countdown !== 0) {
      startBtn.textContent = "Continue"; 
    } else {
      startBtn.textContent = "Pause";
    }
  }
});





































// // import { toggleTimer } from './toggleTimer.js';
// // import { showStopIcon } from './showStopIcon.js';
// // import { minuteToSeconds } from './minuteToSeconds.js';
// // import { countdownTimer } from './countdownTimer.js';
// // import { displayCurrentTime } from './displayCurrentTime.js';
// // import { displaySessionLog } from './displaySessionLog.js';
// import { WORK_SESSION_DURATION, BREAK_SESSION_DURATION } from './constants.js';
// import { workSessionTimer } from './workSessionTimer.js';
// import { stopCurrentTimer } from './stopCurrentTimer.js';
// import { breakSessionTimer } from './breakSessionTimer.js';

// window.addEventListener("load", function () {

//   const startButton = document.querySelector('#pomodoro-start');
//   const stopButton = document.querySelector('#pomodoro-stop');
//   const pauseButton = document.querySelector('#pomodoro-pause');

//   let workSessionDuration = WORK_SESSION_DURATION;
//   let breakSessionDuration = BREAK_SESSION_DURATION;

//   let countdown = 0; // variable to set/clear intervals

//   let currentTimerSession = workSessionDuration;

//   let isPaused = false;

//   startButton.addEventListener('click', () => {
//     // displaySessionLog();
//     stopCurrentTimer();
//     currentTimerSession = workSessionDuration;
//     workSessionTimer(workSessionDuration);
//     stopButton.classList.remove('hidden');
//     pauseButton.classList.remove('hidden');
//     startButton.classList.add('hidden');
//   });

//   stopButton.addEventListener('click', () => {
//     // displaySessionLog();
//     stopCurrentTimer();
//     currentTimerSession = breakSessionDuration;
//     breakSessionTimer(breakSessionDuration);
//     stopButton.classList.add('hidden');
//     pauseButton.classList.add('hidden');
//     startButton.classList.remove('hidden');
//   })

//   pauseButton.addEventListener('click', () => {
//     pauseButton.classList.add('hidden');
//     startButton.classList.remove('hidden');
//     stopButton.classList.remove('hidden');
//     // displaySessionLog();
//     isPaused = true;
    
//   })

// });
