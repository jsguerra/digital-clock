// ===========================================
// First approach to Analog Clock
// ===========================================

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

// ===========================================
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

// ===========================================
// Third approach to Analog Clock
// ===========================================
const boxSec = document.querySelector('#clockWireframe .second'),
      boxMin = document.querySelector('#clockWireframe .minute'),
      boxHour = document.querySelector('#clockWireframe .hour');

// Clock2 Hand Rotation
const clockRotate2 = (el, time) => {
  el.style.transform = `translate3d(-50%,-50%,0) rotateZ(${(time)}deg)`;
}

// Clock Setup and Equations
const clock2 = () => {
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
      
  clockRotate2(boxSec, seconds * 6);
  clockRotate2(boxMin, minutes * 6);
  clockRotate2(boxHour, hours * 30);

  window.requestAnimationFrame(clock2);
}

clock2();

// ===========================================
// General Calendar Dates
// ===========================================
const calDate = ()=> {
  const dateEl = document.getElementById('date');

  let today = new Date(),
      date = today.getDate(),
      day = today.getDay(),
      month = today.getMonth(),
      year = today.getFullYear();

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dateMarkup = `
  <span class="day">${days[day]}</span> <span class="date-number">${date}</span>, <span class="day">${months[month]}</span> <span class="day">${year}</span>
  `;

  dateEl.insertAdjacentHTML('beforeend', dateMarkup);
}

calDate();