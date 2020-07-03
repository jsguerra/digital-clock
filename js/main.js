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
      seconds = day.getSeconds(),
      minutes = day.getMinutes(),
      hours = day.getHours()
      scInterval = (seconds * (360 / 60)),
      mnInterval = ((minutes * (360 / 60)) + (seconds / 60)),
      hrInterval = ((hours * (360 / 12)) + ((minutes * (360 / 60)) / 12));
      
  clockRotate(secondsEl, scInterval);
  clockRotate(minutesEl, mnInterval);
  clockRotate(hourEl, hrInterval);
}

// Init Clock and set Interval
clock();
setInterval(clock, 1000);