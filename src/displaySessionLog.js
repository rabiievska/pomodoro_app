export const displaySessionLog = (type) => {
  const sessionsList = document.querySelector('#pomodoro-sessions');
  const li = document.createElement('li');
  let sessionLabel = type;
  let elapsedTime = parseInt(timeSpentInCurrentSession / 60);
  elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';
  const text = document.createTextNode(`${sessionLabel} : ${elapsedTime} min`);
  li.appendChild(text);
  sessionsList.appendChild(li);
}
