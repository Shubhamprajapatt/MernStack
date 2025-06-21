function updateClock() {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6; // 360 / 60
  const minDeg = min * 6 + sec * 0.1; // 360 / 60 + smooth movement
  const hrDeg = hr * 30 + min * 0.5; // 360 / 12 + smooth movement
  
document.getElementById("second-hand").style.transform = `rotate(${secDeg}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minDeg}deg)`;
  document.getElementById("hour-hand").style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();