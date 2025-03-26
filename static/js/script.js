function changeHandPosition(id, degrees) {
  const el = document.getElementById(id);
  const rotateVal = parseFloat(el.style.transform.replace(/[^0-9.]/g, ""));
  const newRotateVal =
    Math.round(rotateVal) == 630 ? 270 + degrees : rotateVal + degrees;
  el.style.transform = `rotate(${newRotateVal}deg)`;
}

// quartz watch
// function clockIncr() {
//    changeHandPosition("seconds_hand", 6);
//     changeHandPosition("minutes_hand", 0.1);
//     changeHandPosition("hours_hand", 0.0017);
// }
// const intervalSecond = window.setInterval(clockIncr, 1000);

// mechanical watch
function clockIncr() {
  changeHandPosition("seconds_hand", 2);
  changeHandPosition("minutes_hand", 0.0333);
  changeHandPosition("hours_hand", 0.000567);
}
const intervalSecond = window.setInterval(clockIncr, 333);
