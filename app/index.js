import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";
const bg = document.getElementById('bg');

// Get a handle on the <text> element
const hour = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const exact = document.getElementById("exact");
const dateLine = document.getElementById("date");
const isTwelveHour = preferences.clockDisplay == "12h";
// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  
  if (isTwelveHour) {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  
  let mins = util.zeroPad(today.getMinutes());
  hour.text = `${mins > 54 ? util.convertHourToText(+hours + 1) : util.convertHourToText(+hours)}`;
  +hours > 16 ? hour.style.fontSize = 54 : hour.style.fontSize = 80;
  // If you're in the US, it's rarely 13ish. 
  if (isTwelveHour && (+hours + 1 === 13) && mins > 54){
    hour.text = "one";
  }
 
  minutes.text = `${util.convertMinuteToText(mins) ? util.convertMinuteToText(mins) + '~ish' : 'ish'}`;
  exact.text = `${hours}:${mins}`;
  dateLine.text = `${util.monthName(today.getMonth())} ${today.getDate()}, ${today.getFullYear()}`;
}

bg.onclick = () => {
  util.showHide([exact, hour, minutes, dateLine]);
}