'use strict';

const deg = 6, // 360 deg / 60 deg = 6
      hourEl = document.getElementById('hr'),
      minutesEl = document.getElementById('mn'),
      secondsEl = document.getElementById('sc');

const clock = () => {
  let day = new Date(),
      seconds = day.getSeconds() * deg,
      minutes = (day.getMinutes() * deg) + (seconds / 60),
      hours = (day.getHours() * (360 / 12)) + ((day.getMinutes() * deg) / 12);
  
  hourEl.style.transform = `rotateZ(${(hours)}deg)`;
  minutesEl.style.transform = `rotateZ(${minutes}deg)`;
  secondsEl.style.transform = `rotateZ(${seconds}deg)`;
}

clock();

setInterval(clock, 1000);