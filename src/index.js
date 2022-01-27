
window.addEventListener("load", function () {

  let countdown = 0; // variable to set/clear intervals
  // let seconds = 1500; // seconds left on the clock
  let seconds = 660; // test working time
  let workTime = 25;
  let breakTime = 5;
  let isBreak = true;
  let isPaused = true;

  const status = document.querySelector("#pomodoro-status"); // work or break – if work, then it displays "keep working", if break – "take a break"
  const timerDisplay = document.querySelector("#timer-display");
  const startBtn = document.querySelector("#start-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const workMin = document.querySelector("#work-min");
  const breakMin = document.querySelector("#break-min");

  const timer = () => {  
    seconds--;  // updates the global variable
    displayTime();
    if (seconds < 0) {    
      clearInterval(countdown);     
      seconds = (isBreak ? breakTime : workTime) * 60;    
      isBreak = !isBreak;
      countdown = setInterval(timer, 1000);  
    }
  };

  const displayTime = () => {
    let secondsLeft = seconds % 60; // % is often used for timers 
    let mins = Math.floor(seconds / 60); // takes seconds from the global scope 
    timerDisplay.innerHTML = `${mins}:${secondsLeft < 10 ? 0 : ''}${secondsLeft}`; // is adding 0 before secondsLeft, if there are less then 10 seconds left
  };

  startBtn.addEventListener('click', () => {  
    clearInterval(countdown);  
    isPaused = !isPaused;  
    if (!isPaused) {    
      countdown = setInterval(timer, 1000);  
    }
    buttonDisplay();
  });

  resetBtn.addEventListener('click', () => {  // is not working
    clearInterval(countdown);  
    seconds = workTime * 60;  
    countdown = 0;  
    isPaused = true;  
    isBreak = true;
  });

  const buttonDisplay = () => {
    if (isPaused && countdown === 0) { // beginning/ first iteration
      startBtn.innerHTML = "START";
    } else if (isPaused && countdown !== 0) { // timer is running
      startBtn.innerHTML = "Continue"; 
    } else { // not paused, timer is running
      startBtn.innerHTML = "Pause";
    }
  }

  let increment = 5;

  const timerEvents = () => {
    document.querySelector('#work-plus').addEventListener('click', () => {
      workTime = workTime + increment;
      console.log(workTime);
    })
    document.querySelector('#work-minus').addEventListener('click', () => {
      workTime = workTime - increment;
      console.log(workTime);
    })
    document.querySelector('#break-plus').addEventListener('click', () => {
      breakTime = breakTime + increment;
      console.log(breakTime);
    })
    document.querySelector('#break-minus').addEventListener('click', () => {
      breakTime = breakTime - increment;
      console.log(breakTime);
    })
  };

  const updateHTML = () => {
    displayTime();
    timerEvents();
    isBreak ? status.innerHTML = "Keep Working" : status.innerHTML = "Take a Break!";
    workMin.innerHTML = workTime;
    breakMin.innerHTML = breakTime;  
  };

  updateHTML();
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
