window.addEventListener("load", function () {

  let countdown = 0; // variable to set/clear intervals
  let seconds = 10; // seconds left on the clock
  let workTime = 1;
  let breakTime = 0.5;
  // let seconds = 1500; // seconds left on the clock
  // let workTime = 25;
  // let breakTime = 5;
  let isBreak = true;
  let isPaused = true;

  const status = document.querySelector("#pomodoro-status"); // work or break – if work, then it displays "keep working", if break – "take a break"
  const timerDisplay = document.querySelector("#timer-display");
  const startBtn = document.querySelector("#start-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const workMin = document.querySelector("#work-min");
  const breakMin = document.querySelector("#break-min");

  /* EVENT LISTENERS FOR START AND RESET BUTTONS */
  startBtn.addEventListener('click', () => {  
    clearInterval(countdown);  
    isPaused = !isPaused;  
    if (!isPaused) {  
      seconds = workTime * 60;  
      countdown = setInterval(timer, 1000);  
    }
    buttonDisplay();
  });

  resetBtn.addEventListener('click', () => {  
    clearInterval(countdown);  
    seconds = workTime * 60;  
    countdown = 0;  
    isPaused = true;  
    isBreak = true;
    displayTime();
    buttonDisplay();
    updateHTML();
  });

  /* TIMER - HANDLES COUNTDOWN */
  const timer = () => {  
    seconds--;  // updates the global variable
    displayTime();
    if (seconds < 0) {    
      clearInterval(countdown); 
      showingAlert();    
      seconds = (isBreak ? breakTime : workTime) * 60;    
      isBreak = !isBreak;
      countdown = setInterval(timer, 1000);  
      updateHTML();
    }
  };

  /* UPDATE WORK AND BREAK TIMES */
  let increment = 5;

  const timerEvents = () => {
    document.querySelector('#work-plus').addEventListener('click', () => {
      workTime = workTime + increment;
      updateHTML();
    })
    document.querySelector('#work-minus').addEventListener('click', () => {
      if (workTime > 0) {
        workTime = workTime - increment;
        updateHTML();
      }
    })
    document.querySelector('#break-plus').addEventListener('click', () => {
      breakTime = breakTime + increment;
      updateHTML();
    })
    document.querySelector('#break-minus').addEventListener('click', () => {
      if (breakTime > 0) {
        breakTime = breakTime - increment;
        updateHTML();
      }
    })
  };

  /* UPDATE HTML CONTENT */
  const displayTime = () => {
    let secondsLeft = seconds % 60; // % is often used for timers 
    let mins = Math.floor(seconds / 60); // takes seconds from the global scope 
    timerDisplay.innerHTML = `${mins}:${secondsLeft < 10 ? 0 : ''}${secondsLeft}`; // is adding 0 before secondsLeft, if there are less then 10 seconds left
  };

  const buttonDisplay = () => {
    if (isPaused && countdown === 0) { // beginning/ first iteration
      startBtn.innerHTML = "START";
    } else if (isPaused && countdown !== 0) { // timer is running
      startBtn.innerHTML = "Continue"; 
    } else { // not paused, timer is running
      startBtn.innerHTML = "Pause";
    }
  }

  const updateHTML = () => {
    displayTime();
    isBreak ? status.innerHTML = "Keep Working" : status.innerHTML = "Take a Break!";
    workMin.innerHTML = workTime;
    if (breakTime <= 0) {
      return;
    }
    breakMin.innerHTML = breakTime;  
  };

  const showingAlert = () => {
    console.log(isBreak);
    console.log(status);
    isBreak ? alert("Take a Break!") : alert("Keep Working");
  };

  timerEvents();
});
