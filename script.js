console.log("JS Loaded"); // DEBUG LINE

let step = 0;

document.getElementById("tapBtn").addEventListener("click", function () {
  const text = document.getElementById("text");
  const music = document.getElementById("bgMusic");

  if (step === 0) {
    music.play();
    text.innerText = "I made this for you 🥺";
    step++;
  } 
  else if (step === 1) {
    text.innerText = "Tap to open your gift 🎁";
    step++;
  } 
  else if (step === 2) {
    window.open("gallery.html", "_blank");
  }
});