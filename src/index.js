function practiceTest(phrase) {
  return phrase + "!";
}

module.exports = {
  practiceTest,
}

window.addEventListener("load", function () {
  document.querySelector('#name').addEventListener("keyup", e => {
    document.querySelector('#greet').innerHTML = 'Hello ' + document.querySelector('#name').value;
  });
});
