const AddApplication = document.getElementById("AddButton");
AddApplication.addEventListener("click", function() {
  AddApplication.style.color = 'green';
  AddApplication.style.textDecoration = 'underline';
});

const display1 = document.getElementById("display1");
let timer1 = null;
let starttime1 = 0;
let elapsedtime1 = 0;
let RunTime1 = false;

function start1() {
  if (!RunTime1) {
    starttime1 = Date.now() - elapsedtime1;
    timer1 = setInterval(update1, 10);
    RunTime1 = true;
  }
}

function pause1() {
  if (RunTime1) {
    clearInterval(timer1);
    elapsedtime1 = Date.now() - starttime1;
    RunTime1 = false;
  }
}

function reset1() {
 clearInterval(timer1);
  starttime1 = 0;
  elapsedtime1 = 0;
  RunTime1 = false;
  display1.textContent = "00:00:00:00";
}

function update1() {
  const currenttime1 = Date.now();
  elapsedtime1 = currenttime1 - starttime1;
  let hours = Math.floor(elapsedtime1 / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedtime1 / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedtime1 / 1000 % 60);
  let miliseconds = Math.floor(elapsedtime1 % 1000/10);

  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2,"0");
  display1.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}


const display2 = document.getElementById("display2");
let timer2 = null;
let starttime2 = 0;
let elapsedtime2 = 0;
let RunTime2 = false;

function start2() {
  if (!RunTime2) {
    starttime2 = Date.now() - elapsedtime2;
    timer2 = setInterval(update2, 10);
    RunTime2 = true;
  }
}

function pause2() {
  if (RunTime2) {
    clearInterval(timer2);
    elapsedtime2 = Date.now() - starttime2;
    RunTime2 = false;
  }
}

function reset2() {
 clearInterval(timer2);
  starttime2 = 0;
  elapsedtime2 = 0;
  RunTime2 = false;
  display2.textContent = "00:00:00:00";
}

function update2() {
  const currenttime2 = Date.now();
  elapsedtime2 = currenttime2 - starttime2;
  let hours = Math.floor(elapsedtime2 / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedtime2 / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedtime2 / 1000 % 60);
  let miliseconds = Math.floor(elapsedtime2 % 1000/10);

  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2,"0");
  display2.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}

const display3 = document.getElementById("display3");
let timer3= null;
let starttime3 = 0;
let elapsedtime3 = 0;
let RunTime3 = false;

function start3() {
  if (!RunTime3) {
    starttime3 = Date.now() - elapsedtime3;
    timer3 = setInterval(update3, 10);
    RunTime3 = true;
  }
}

function pause3() {
  if (RunTime3) {
    clearInterval(timer3);
    elapsedtime3 = Date.now() - starttime3;
    RunTime3 = false;
  }
}

function reset3() {
 clearInterval(timer3);
  starttime3 = 0;
  elapsedtime3 = 0;
  RunTime3 = false;
  display3.textContent = "00:00:00:00";
}

function update3() {
  const currenttime3 = Date.now();
  elapsedtime3 = currenttime3 - starttime3;
  let hours = Math.floor(elapsedtime3 / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedtime3 / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedtime3 / 1000 % 60);
  let miliseconds = Math.floor(elapsedtime3 % 1000/10);

  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2,"0");
  display3.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}

const display4 = document.getElementById("display4");
let timer4 = null;
let starttime4 = 0;
let elapsedtime4 = 0;
let RunTime4 = false;

function start4() {
  if (!RunTime4) {
    starttime4 = Date.now() - elapsedtime4;
    timer4 = setInterval(update4, 10);
    RunTime4 = true;
  }
}

function pause4() {
  if (RunTime4) {
    clearInterval(timer4);
    elapsedtime4 = Date.now() - starttime4;
    RunTime4 = false;
  }
}

function reset4() {
 clearInterval(timer4);
  starttime4 = 0;
  elapsedtime4 = 0;
  RunTime4 = false;
  display4.textContent = "00:00:00:00";
}

function update4() {
  const currenttime4 = Date.now();
  elapsedtime4 = currenttime4 - starttime4;
  let hours = Math.floor(elapsedtime4 / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedtime4 / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedtime4 / 1000 % 60);
  let miliseconds = Math.floor(elapsedtime4 % 1000/10);

  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2,"0");
  display4.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}



const display5 = document.getElementById("display5");
let timer5 = null;
let starttime5 = 0;
let elapsedtime5 = 0;
let RunTime5 = false;

function start5() {
  if (!RunTime5) {
    starttime5 = Date.now() - elapsedtime5;
    timer5 = setInterval(update5, 10);
    RunTime5 = true;
  }
}

function pause5() {
  if (RunTime5) {
    clearInterval(timer5);
    elapsedtime5 = Date.now() - starttime5;
    RunTime5 = false;
  }
}

function reset5() {
 clearInterval(timer5);
  starttime5 = 0;
  elapsedtime5 = 0;
  RunTime5 = false;
  display5.textContent = "00:00:00:00";
}

function update5() {
  const currenttime5 = Date.now();
  elapsedtime5 = currenttime5 - starttime5;
  let hours = Math.floor(elapsedtime5 / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedtime5 / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedtime5 / 1000 % 60);
  let miliseconds = Math.floor(elapsedtime5 % 1000/10);

  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2,"0");
  display5.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}



const display6 = document.getElementById("display6");
let timer6 = null;
let starttime6 = 0;
let elapsedtime6 = 0;
let RunTime6 = false;

function start6() {
  if (!RunTime6) {
    starttime6 = Date.now() - elapsedtime6;
    timer6 = setInterval(update6, 10);
    RunTime6 = true;
  }
}

function pause6() {
  if (RunTime6) {
    clearInterval(timer6);
    elapsedtime6 = Date.now() - starttime6;
    RunTime6 = false;
  }
}

function reset6() {
 clearInterval(timer6);
  starttime6 = 0;
  elapsedtime6 = 0;
  RunTime6 = false;
  display6.textContent = "00:00:00:00";
}

function update6() {
  const currenttime6 = Date.now();
  elapsedtime6 = currenttime6 - starttime6;
  let hours = Math.floor(elapsedtime6 / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedtime6 / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedtime6 / 1000 % 60);
  let miliseconds = Math.floor(elapsedtime6 % 1000/10);

  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2,"0");
  display6.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}