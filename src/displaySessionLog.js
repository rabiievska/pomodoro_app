export const displaySessionLog = () => {
  console.log("works");
  const sessionsList = document.querySelector('#pomodoro-sessions');
  const li = document.createElement('li');
  let sessionLabel = window.isWorkingTimer ? "Work" : "Break";
  let elapsedTime = parseInt(sessionLabel / 60);
  elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';
  const text = document.createTextNode(`${sessionLabel} : ${elapsedTime} min`);
  li.appendChild(text);
  sessionsList.appendChild(li);
}

// commit 3 after bug
