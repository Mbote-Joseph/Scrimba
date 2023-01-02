var scorehome = 0;
var scoreguest = 0;
var scorehome1 = document.getElementById("scorehome");
var scoreguest1 = document.getElementById("scoreguest");

function reset() {
  scorehome = 0;
  scoreguest = 0;
  scorehome1.innerHTML = scorehome;
  scoreguest1.innerHTML = scoreguest;
}

function addHome() {
  scorehome++;
  scorehome1.innerHTML = scorehome;
  console.log(scorehome);
}

function addGuest() {
  scoreguest++;
  scoreguest1.innerHTML = scoreguest;
  console.log(scoreguest);
}

function addHome2() {
  scorehome += 2;
  scorehome1.innerHTML = scorehome;
  console.log(scorehome);
}

function addGuest2() {
  scoreguest += 2;
  scoreguest1.innerHTML = scoreguest;
  console.log(scoreguest);
}

function addHome3() {
  scorehome += 3;
  scorehome1.innerHTML = scorehome;
  console.log(scorehome);
}

function addGuest3() {
  scoreguest += 3;
  scoreguest1.innerHTML = scoreguest;
  console.log(scoreguest);
}
