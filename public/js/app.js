// data and variable declarations
var timer;
var minutesLeft = 25;
var secondsLeft = 0;
var isOnBreak = false;
var numberOfBreaks = 0;
// getting references to the dom
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var startButton = document.querySelector("#start");
// initialization code
  // Event listeners
  startButton.addEventListener("click", start);
  render();
// function definitions
function start(){
  if (!timer){
    timer = setInterval(tick, 1000);
  }
}
function tick(){
  decrementMinutes();
  decrementSeconds();
  render();
}
function decrementMinutes(){
  if (minutesLeft > 0 && secondsLeft === 0) {
    minutesLeft -= 1;
  }
}
function decrementSeconds(){
  if (secondsLeft === 0) {
    secondsLeft = 59;
  } else {
    secondsLeft -= 1;
  }
}
function render(){
  minutes.textContent = pad(minutesLeft);
  seconds.textContent = pad(secondsLeft);
}
function pad(num){
  if (num < 10){
    return `0${num}`;
  } else {
    return num;
  }
}
