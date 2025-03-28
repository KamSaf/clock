document.addEventListener("DOMContentLoaded", function () {
  function syncClock() {
    const date = new Date();
    setClockHands("seconds_hand", date.getSeconds() * 6);
    setClockHands(
      "minutes_hand",
      date.getMinutes() * 6 + 0.1 * date.getSeconds()
    );
    setClockHands(
      "hours_hand",
      date.getHours() * 30 + 0.0017 * date.getMinutes() * 60
    );
  }

  function mechClockIncr() {
    changeHandPosition("seconds_hand", 1);
    changeHandPosition("minutes_hand", 0.0166);
    changeHandPosition("hours_hand", 0.000283);
  }

  function setClockHands(id, degrees) {
    const hand = document.getElementById(id);
    hand.style.transform = `rotate(${Math.round(270 + degrees)}deg)`;
  }

  function quartzClockIncr() {
    changeHandPosition("seconds_hand", 6);
    changeHandPosition("minutes_hand", 0.1);
    changeHandPosition("hours_hand", 0.0017);
  }

  function changeHandPosition(id, degrees) {
    const hand = document.getElementById(id);
    const rotateVal = parseFloat(hand.style.transform.replace(/[^0-9.]/g, ""));
    const newRotateVal =
      Math.round(rotateVal) == 630 ? 270 + degrees : rotateVal + degrees;
    hand.style.transform = `rotate(${newRotateVal}deg)`;
  }

  function startClock() {
    return modeSwitch.checked
      ? window.setInterval(mechClockIncr, 167)
      : window.setInterval(quartzClockIncr, 1000);
  }

  const modeSwitch = document.getElementById("mode_switch");
  syncClock();
  let interval = startClock();

  modeSwitch.addEventListener("click", () => {
    syncClock();
    if (interval) {
      clearInterval(interval);
    }
    interval = startClock();
  });
});
