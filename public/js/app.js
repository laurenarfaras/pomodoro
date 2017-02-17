var Timer = {
  audio: new Audio('audio/beep.mp3'),
  minutesLeft: 0,
  secondsLeft: 5,
  isOnBreak: false,
  numberOfBreaks: 0,
  numberOfRounds: 0,
  descriptionTxt: "",
  init: function(){
    this.cacheDom();
    this.addListeners();
    this.render();
  },
  cacheDom: function(){
    this.minutes = document.querySelector("#minutes");
    this.seconds = document.querySelector("#seconds");
    this.startButton = document.querySelector("#start");
    this.description = document.querySelector("#description");
    this.rounds = document.querySelector("#rounds");
  },
  render: function(){
    this.minutes.textContent = this.pad(this.minutesLeft);
    this.seconds.textContent = this.pad(this.secondsLeft);
    this.description.textContent = this.descriptionTxt;
    this.rounds.textContent = this.numberOfRounds;
  },
  addListeners: function(){
    // the bind statement takes the meaning of this from addListeners and pushes
    // that meaning into the start function
    this.startButton.addEventListener("click", this.start.bind(this));
  },
  start: function(){
    if (!this.timer){
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
  },
  tick: function(){
    // when timer has finished and is at 00:00
    if (this.secondsLeft === 0 && this.minutesLeft === 0) {
      // clear the timer
      clearInterval(this.timer);
      this.timer = !this.timer; // dereference
      if (this.isOnBreak){
        this.numberOfBreaks += 1;
        this.resetWorkTime();
      } else {
        this.resetBreakTime();
      }
      // switches between being on break and not being on break each time,
      // so set it to the opposite of itself
      this.isOnBreak = !this.isOnBreak;
      if (this.isOnBreak){
        this.numberOfRounds += 1;
        alertify.alert("Pomodoro Timer", "Time is up! Time for a break!", this.audio.play());
      } else {
        alertify.alert("Pomodoro Timer", "Time is up! Let's get to work!", this.audio.play());
      }
      this.render();
      return;
    }
    this.decrementMinutes();
    this.decrementSeconds();
    this.render();
  },
  decrementMinutes: function(){
    if (this.secondsLeft === 0) {
      this.minutesLeft -= 1;
    }
  },
  decrementSeconds: function(){
    if (this.secondsLeft === 0) {
      this.secondsLeft = 59;
    } else {
      this.secondsLeft -= 1;
    }
  },
  pad: function(num){
    if (num < 10){
      return `0${num}`;
    } else {
      return num;
    }
  },
  resetWorkTime: function(){
    this.minutesLeft = 0;
    this.secondsLeft = 5;
    this.descriptionTxt = "";
  },
  resetBreakTime: function(){
    // 3%3 = 0
    // 6%3 = 0
    // so each long break should be when numberOfBreaks%3 = 0
    if (this.numberOfBreaks < 3) {
      this.minutesLeft = 0;
      this.secondsLeft = 2;
      this.descriptionTxt = "short break";
    } else {
      this.minutesLeft = 0;
      this.secondsLeft = 3;
      this.numberOfBreaks = 0;
      this.descriptionTxt = "long break";
    }
    //this.secondsLeft = 0;
  }
};

Timer.init();

// data and variable declarations
// var timer;
// var minutesLeft = 0;
// var secondsLeft = 5;
// var isOnBreak = false;
// var numberOfBreaks = 0;
// getting references to the dom
// var minutes = document.querySelector("#minutes");
// var seconds = document.querySelector("#seconds");
// var startButton = document.querySelector("#start");
// initialization code
  // Event listeners
  // startButton.addEventListener("click", start);
  // render();
// function definitions
// function start(){
//   console.log(timer);
//   if (!timer){
//     timer = setInterval(tick, 1000);
//   }
// }
// function tick(){
//   // when timer has finished and is at 00:00
//   if (secondsLeft === 0 && minutesLeft === 0) {
//     // clear the timer
//     clearInterval(timer);
//     timer = !timer; // dereference
//     if (isOnBreak){
//       numberOfBreaks += 1;
//       resetWorkTime();
//     } else {
//       resetBreakTime();
//     }
//     // switches between being on break and not being on break each time,
//     // so set it to the opposite of itself
//     isOnBreak = !isOnBreak;
//     render();
//     return;
//   }
//   decrementMinutes();
//   decrementSeconds();
//   render();
// }
// function decrementMinutes(){
//   if (secondsLeft === 0) {
//     minutesLeft -= 1;
//   }
// }
// function decrementSeconds(){
//   if (secondsLeft === 0) {
//     secondsLeft = 59;
//   } else {
//     secondsLeft -= 1;
//   }
// }
// function render(){
//   minutes.textContent = pad(minutesLeft);
//   seconds.textContent = pad(secondsLeft);
// }
// function pad(num){
//   if (num < 10){
//     return `0${num}`;
//   } else {
//     return num;
//   }
// }
// function resetWorkTime(){
//   minutesLeft = 0;
//   secondsLeft = 5;
// }
// function resetBreakTime(){
//   // 3%3 = 0
//   // 6%3 = 0
//   // so each long break should be when numberOfBreaks%3 = 0
//   if (numberOfBreaks < 3) {
//     minutesLeft = 5;
//   } else {
//     minutesLeft = 15;
//     numberOfBreaks = 0;
//   }
//   secondsLeft = 0;
//
// }
