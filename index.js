const ponteiro_segundos = document.querySelector(".ponteiro_segundos");
const ponteiro_minutos = document.querySelector(".ponteiro_minutos");
const ponteiro_horas = document.querySelector(".ponteiro_horas");

const buttonSwitcher = document.querySelector(".switch");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const root = document.querySelector(":root");

function changeTime(element, value) {
  element.style.transform = `rotate(${value}deg)`;
}

function getTimeValues() {
  const date = new Date();
  return {
    segundos: date.getSeconds(),
    minutos: date.getMinutes(),
    horas: date.getHours(),
  };
}
function time() {
  const fatorSegundos = 360 / 60;
  const fatorMinutos = 360 / 60;
  const fatorHoras = 360 / 12;

  const { segundos, minutos, horas } = getTimeValues();

  const hora = fatorHoras * horas + (fatorHoras * minutos) / 60;

  changeTime(ponteiro_segundos, segundos * fatorSegundos);
  changeTime(ponteiro_minutos, minutos * fatorMinutos);
  changeTime(ponteiro_horas, hora);
}

setInterval(() => {
  time();
}, 1000);

function changeTheme() {
  if (sun.style.display == "none") {
    root.style.setProperty("--clockColor", "black");
    root.style.setProperty("--background", "white");
    sun.style.display = "inline-block";
    moon.style.display = "none";
    return;
  }
  root.style.setProperty("--clockColor", "white");
  root.style.setProperty("--background", "black");

  sun.style.display = "none";
  moon.style.display = "inline-block";
}
