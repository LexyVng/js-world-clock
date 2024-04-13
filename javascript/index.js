function updateTimeElements() {
  let newYorkElement = document.querySelector("#newyork");
  let newYorkDateElement = newYorkElement.querySelector(".city-date");
  let newYorkTimeElement = newYorkElement.querySelector(".city-time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd, Do MMMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "hh:mm:ss [<small>]A[</small]"
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".city-date");
  let londonTimeElement = londonElement.querySelector(".city-time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small]"
  );

  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".city-date");
  let singaporeTimeElement = singaporeElement.querySelector(".city-time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("dddd, Do MMMM YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "hh:mm:ss [<small>]A[</small]"
  );
}

updateTimeElements;
setInterval(updateTimeElements, 1000);
