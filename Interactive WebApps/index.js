var counter = document.getElementById("counter");
var text = document.getElementById("text");
var count = 0;
if (count < 10) {
  function add() {
    count++;
    counter.innerHTML = count;
  }
} else if (count > 10) {
  text.innerHTML = "You can't go above 10";
}

function sub() {
  count--;
  if (count < 0) {
    count = 0;
    text.innerHTML = "You can't go below 0";
  } else {
    text.innerHTML = "You can add more";
    counter.innerHTML = count;
  }
}
