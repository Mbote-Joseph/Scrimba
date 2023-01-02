var emojis = ["🥳", "😂", "😇"];
var emoji = document.getElementById("emoji");

for (var i = 0; i < emojis.length; i++) {
  emoji.innerHTML += emojis[i] + " " + " ";
}

function addEmoji() {
  var emojiInput = document.getElementById("emojiInput").value;
  emojis.push(emojiInput);
  emoji.innerHTML += emojiInput + " ";
  document.getElementById("emojiInput").value = "";
}

function removeEmoji() {
  emojis.pop();
  emoji.innerHTML = "";
  for (var i = 0; i < emojis.length; i++) {
    emoji.innerHTML += emojis[i] + " ";
  }
}

function resetEmoji() {
  emojis = ["🥳", "😂", "😇"];
  emoji.innerHTML = "";
  for (var i = 0; i < emojis.length; i++) {
    emoji.innerHTML += emojis[i] + " ";
  }
}

function addBackEmoji() {
  emojis.unshift(emojiInput);
  emoji.innerHTML = "";
  for (var i = 0; i < emojis.length; i++) {
    emoji.innerHTML += emojis[i] + " ";
  }
}

function removeBackEmoji() {
  emojis.shift();
  emoji.innerHTML = "";
  for (var i = 0; i < emojis.length; i++) {
    emoji.innerHTML += emojis[i] + " ";
  }
}

function addEmojiAtBeginning() {
  var emojiInput = document.getElementById("emojiInput").value;
  emojis.unshift(emojiInput);
  emoji.innerHTML = "";
  for (var i = 0; i < emojis.length; i++) {
    emoji.innerHTML += emojis[i] + " ";
  }
  document.getElementById("emojiInput").value = "";
}

function removeEmojiAtBeginning() {
  emojis.shift();
  emoji.innerHTML = "";
  for (var i = 0; i < emojis.length; i++) {
    emoji.innerHTML += emojis[i] + " ";
  }
}
