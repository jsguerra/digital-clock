'use strict';

const deg = 6,
      hourEl = document.getElementById('hr'),
      minutesEl = document.getElementById('mn'),
      secondsEl = document.getElementById('sc');

const clock = () => {
  let day = new Date(),
      hours = day.getHours() * 30,
      minutes = day.getMinutes() * deg,
      seconds = day.getSeconds() * deg;
  
  hourEl.style.transform = `rotateZ(${(hours) + (minutes / 12)}deg)`;
  minutesEl.style.transform = `rotateZ(${minutes}deg)`;
  secondsEl.style.transform = `rotateZ(${seconds}deg)`;
}

clock();

setInterval(clock);