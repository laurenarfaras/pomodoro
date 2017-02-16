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
// function definitions
function start(){
  if (!timer){
    timer = setInterval(tick, 1000);
  }
}
function tick(){
  console.log("tick");
}
function render(){}
