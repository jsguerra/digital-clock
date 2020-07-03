// Clock Elements
const hourEl = document.getElementById('hr'),
      minutesEl = document.getElementById('mn'),
      secondsEl = document.getElementById('sc');

// Clock Hand Rotation
const clockRotate = (el, time) => {
  el.style.transform = `rotateZ(${(time)}deg)`;
}

// Clock Setup and Equations
const clock = () => {  
  let day = new Date(),
      seconds = day.getSeconds() * (360 / 60),
      minutes = (day.getMinutes() * (360 / 60)) + (seconds / 60),
      hours = (day.getHours() * (360 / 12)) + (day.getMinutes() * (360 / 60)) / 12;
      
  clockRotate(secondsEl, seconds);
  clockRotate(minutesEl, minutes);
  clockRotate(hourEl, hours);
}

// Init Clock and set Interval
clock();
setInterval(clock, 1000);