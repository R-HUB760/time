let day = document.querySelector(".day");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let year = document.querySelector('#year');

function examTime(){

  // Future Date
  let futureDate = new Date("August 16, 2024 14:00:00");
  let getTimeFuture = futureDate.getTime();

  // Current Date
  let currentDate = new Date();
  let getTimeToday = currentDate.getTime();

  // Total time
  let totalTime = getTimeFuture - getTimeToday;

  // Convert mileseconds till Days
  let secondsT = Math.floor(totalTime / 1000);
  let munitesT = Math.floor(secondsT / 60);
  let hoursT = Math.floor(munitesT / 60);
  let DayT = Math.floor(hoursT / 24);

  // Remaining Time
  let HoursTime = hoursT % 24;
  let MinutesTime = munitesT % 60;
  let SecondsTime = secondsT % 60;

  // Show time left
  day.innerHTML = DayT;
  hours.innerHTML = HoursTime;
  minutes.innerHTML = MinutesTime;
  seconds.innerHTML = SecondsTime;

}

// Dynamic remaining time
setInterval(examTime, 1000);


// Year for footer
let yearT = new Date();
let currentYear = yearT.getFullYear();
year.innerHTML = currentYear;
