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

  window.requestAnimationFrame(clock);
}

// Init Clock
clock();
// setInterval(clock);

// Second approach to Analog Clock
// ===========================================
const clockElement = document.querySelector("#analogClock");
const offset = -90;

const timer = () => {
  let date = new Date(),
      milliseconds = date.getMilliseconds(),
      seconds = date.getSeconds(),
      hours = date.getHours(),
      minutes = date.getMinutes();

  seconds += milliseconds / 1000; // using milliseconds smooths hand motions
  minutes += seconds / 60;
  hours += minutes / 60;

  // Normalize to the 12 hour clock
  if (hours > 12) {
    hours -= 12;
  }

  clockElement.style.setProperty("--seconds", offset + 6 * seconds + "deg");
  clockElement.style.setProperty("--hours", offset + 30 * hours + "deg");
  clockElement.style.setProperty("--minutes", offset + 6 * minutes + "deg");

  requestAnimationFrame(timer);
}
timer();