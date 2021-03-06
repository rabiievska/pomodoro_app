window.addEventListener("load", () => {

  let countdown = 0; // variable to set/clear intervals
  let seconds = 1500; // seconds left on the clock
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
  
  /* EVENT LISTENERS FOR START AND RESET BUTTONS */
  startBtn.addEventListener('click', () => {  
    clearInterval(countdown);  
    isPaused = !isPaused;  
    if (!isPaused) {  
      seconds = workTime * 60;  
      countdown = setInterval(timer, 1000);  
    }
    buttonUpdate(buttonDisplay(isPaused, countdown));
  });
  
  resetBtn.addEventListener('click', () => {  
    clearInterval(countdown);  
    seconds = workTime * 60;  
    countdown = 0;  
    isPaused = true;  
    isBreak = true;
    displayTime();
    buttonUpdate(buttonDisplay(isPaused, countdown));
    startBtn.innnerHTML = buttonUpdate(buttonDisplay(isPaused, countdown));
    updateHTML();
  });
  
  /* TIMER - HANDLES COUNTDOWN */
  const timer = () => {  
    seconds--;  // updates the global variable
    displayTime();
    if (seconds <= 0) {    
      clearInterval(countdown); 
      seconds = (isBreak ? breakTime : workTime) * 60;    
      isBreak = !isBreak;
      countdown = setInterval(timer, 1000);  
      updateHTML();
      showingAlert();    
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
  
  const buttonUpdate = (text) => {
    startBtn.innerHTML = text;
  };
  
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
    if (typeof chrome?.notifications?.create === "function") {
      chrome.notifications.create(`pomodoro_alert_${Math.random()}`, {
        type: 'basic',
        iconUrl: 'assets/images/tomato.png',
        title: getNotificationMessage(isBreak),
        message: 'Timer update!',
        priority: 2
      })
    } else {
      alert(getNotificationMessage(isBreak))
    }
  };
  
  timerEvents();
});

export const getNotificationMessage = (isBreak) => {
  return isBreak ? 'Take a break!' : 'Keep working!';
}; 

export const buttonDisplay = (isPaused, countdown) => {
  if (isPaused && countdown === 0) { // beginning/ first iteration
    return "START";
  } else if (isPaused && countdown !== 0) { // timer is running
    return "Continue";
  } else { // not paused, timer is running
    return "Pause";
  }
};
