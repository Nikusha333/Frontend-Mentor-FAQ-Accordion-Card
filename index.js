const howManyText = document.getElementById("how-many-text");
const youCanText = document.getElementById("you-can-text");
const whatText = document.getElementById("what-text");
const noMoreText = document.getElementById("no-more-text");
const howDoText = document.getElementById("how-do-text");
const clickText = document.getElementById("click-text");
const canIText = document.getElementById("can-i-text");
const yesText = document.getElementById("yes-text");
const doYouText = document.getElementById("do-you-text");
const chatText = document.getElementById("chat-text");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const icon4 = document.getElementById("icon4");
const icon5 = document.getElementById("icon5");

function toggle(id) {
  let howManyText = document.getElementById(id);
  if (youCanText.style.display == "block") howManyText.style.display = "none";
  else youCanText.style.display = "block";
}

howManyText.addEventListener("click", function () {
  toggle("you-can-text");
  icon1.classList.toggle("rotate");
});

function toggle2(id) {
  let whatText = document.getElementById(id);
  if (noMoreText.style.display == "block") whatText.style.display = "none";
  else noMoreText.style.display = "block";
}

whatText.addEventListener("click", function () {
  toggle2("no-more-text");
  icon2.classList.toggle("rotate");
});

function toggle3(id) {
  let howDoText = document.getElementById(id);
  if (clickText.style.display == "block") howDoText.style.display = "none";
  else clickText.style.display = "block";
}

howDoText.addEventListener("click", function () {
  toggle3("click-text");
  icon3.classList.toggle("rotate");
});

function toggle4(id) {
  let canIText = document.getElementById(id);
  if (yesText.style.display == "block") canIText.style.display = "none";
  else yesText.style.display = "block";
  icon4.classList.toggle("rotate");
}

canIText.addEventListener("click", function () {
  toggle4("yes-text");
});

function toggle5(id) {
  let doYouText = document.getElementById(id);
  if (chatText.style.display == "block") doYouText.style.display = "none";
  else chatText.style.display = "block";
  icon5.classList.toggle("rotate");
}

doYouText.addEventListener("click", function () {
  toggle5("chat-text");
});
