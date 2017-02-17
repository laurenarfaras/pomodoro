// data and variable declarations
var timer;
var minutesLeft = 0;
var secondsLeft = 5;
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
  console.log(timer);
  if (!timer){
    timer = setInterval(tick, 1000);
  }
}
function tick(){
  // when timer has finished and is at 00:00
  if (secondsLeft === 0 && minutesLeft === 0) {
    // clear the timer
    clearInterval(timer);
    timer = !timer; // dereference
    if (isOnBreak){
      numberOfBreaks += 1;
      resetWorkTime();
    } else {
      resetBreakTime();
    }
    // switches between being on break and not being on break each time,
    // so set it to the opposite of itself
    isOnBreak = !isOnBreak;
    render();
    return;
  }
  decrementMinutes();
  decrementSeconds();
  render();
}
function decrementMinutes(){
  if (secondsLeft === 0) {
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
function resetWorkTime(){
  minutesLeft = 0;
  secondsLeft = 5;
}
function resetBreakTime(){
  // 3%3 = 0
  // 6%3 = 0
  // so each long break should be when numberOfBreaks%3 = 0
  if (numberOfBreaks < 3) {
    minutesLeft = 5;
  } else {
    minutesLeft = 15;
    numberOfBreaks = 0;
  }
  secondsLeft = 0;

}
