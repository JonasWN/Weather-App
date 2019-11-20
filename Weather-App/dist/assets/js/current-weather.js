"use strict";

fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={68f82a388c4c0de995710dfc8a8ca667}").then(function (answer) {
  return answer.json();
}).then(function (response) {
  console.log(response);
});