let day = document.querySelector(".day");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function examTime(){
  let days = new Date("August 7, 2022 14:00:00");
  let currentDate = new Date();
  let totalTime = days - currentDate;

  let secondsT = Math.floor(totalTime / 1000);
  let munitesT = Math.floor(secondsT / 60);
  let hoursT = Math.floor(munitesT / 60);

  let DayT = Math.floor(hoursT / 24);
  let HoursTime = hoursT % 24;
  let MinutesTime = munitesT % 60;
  let SecondsTime = secondsT % 60;

  day.innerHTML = DayT;
  hours.innerHTML = HoursTime;
  minutes.innerHTML = MinutesTime;
  seconds.innerHTML = SecondsTime;

}

examTime();

setInterval(examTime, 1000);